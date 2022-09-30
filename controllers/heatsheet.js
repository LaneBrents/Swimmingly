const Heatsheet = require("../models/heatsheet");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initate the S3 constructor which can talk to aws/s3 our bucket!
// import uuid to help generate random names
const { v4: uuidv4 } = require("uuid");
// since we are sharing code, when you pull you don't want to have to edit the
// the bucket name, thats why we're using an environment variable
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const SECRET = process.env.SECRET;

module.exports = {
    create,
    index,
    deleteHeatsheet,
    getHeatsheet
};


async function create(req, res) {
    const key = `swimmingly/heatsheet/${uuidv4()}-${req.file.originalname}`;
    const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer };

    s3.upload(params, async function (err, data) {
        console.log("=======================");
        console.log(err, " err from aws");
        console.log("=======================");
        if (err) return res.status(400).json({ err: "Check Terminal error with AWS" });
        try {
            const heatsheet = await Heatsheet.create({
                image: req.body.image,
                meet: req.body.meet,
            });

            res.status(201).json({ data: heatsheet });
        } catch (err) {
            res.status(400).json({ err });
        }
    })
}

async function index(req, res) {
    try {
        const heatsheets = await Heatsheet.find({});
        res.status(200).json({ data: heatsheets });
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function deleteHeatsheet(req, res) {
    try {
        await Heatsheet.findByIdAndDelete(req.params.id)
        res.status(201).json({});
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function getHeatsheet(req, res) {
    try {
        const team = await Heatsheet.findById(req.params.heatsheetId)
        res.status(201).json({ data: heatsheet });
    } catch (err) {
        res.status(400).json({ err });
    }
}