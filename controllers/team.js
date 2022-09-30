const Team = require("../models/team");
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
    deleteTeam,
    getTeam
};


async function create(req, res) {
    try {
        const team = await Team.create({
            name: req.body.name,
        });

        res.status(201).json({ data: team });
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function index(req, res) {
    try {
        const teams = await Team.find({}).populate("user").exec();
        res.status(200).json({ data: teams });
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function deleteTeam(req, res){
    try {
        await Team.findByIdAndDelete(req.params.id)
        res.status(201).json({});
    } catch(err) {
        res.status(400).json({ err });
    }
}


async function getTeam(req, res){
    try {
        const team = await Team.findById(req.params.teamId)
        res.status(201).json({ data: team });
    } catch(err) {
        res.status(400).json({ err });
    }
}