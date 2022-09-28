const Note = require("../models/swimmer");

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


async function deleteNote(req, res){
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.status(201).json({});
    } catch(err) {
        res.status(400).json({ err });
    }
}


async function getNote(req, res){
    try {
        const note = await Note.findById(req.params.noteId)
        res.status(201).json({ data: note });
    } catch(err) {
        res.status(400).json({ err });
    }
}