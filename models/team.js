const Team = require("../models/team");

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
            grade: req.body.grade,
            gender: req.body.gender,
            events: req.body.events,
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