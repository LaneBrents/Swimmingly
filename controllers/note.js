const Note = require("../models/swimmer");
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
    deleteNote,
    getNote
};


async function create(req, res) {
    try {
        const note = await Note.create({
            text: req.body.text,
        });

        res.status(201).json({ data: note });
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function index(req, res) {
    try {
        const notes = await Note.find({}).populate("user").exec();
        res.status(200).json({ data: notes });
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function deleteNote(req, res) {
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.status(201).json({});
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function getNote(req, res) {
    try {
        const note = await Note.findById(req.params.noteId)
        res.status(201).json({ data: note });
    } catch (err) {
        res.status(400).json({ err });
    }
}