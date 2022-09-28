const Swimmer = require("../models/swimmer");

module.exports = {
    create,
    index,
    deleteSwimmer,
    getSwimmer
};


async function create(req, res) {
    try {
        const swimmer = await Swimmer.create({
            name: req.body.name,
            grade: req.body.grade,
            gender: req.body.gender,
            events: req.body.events,
        });

        res.status(201).json({ data: swimmer });
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function index(req, res) {
    try {
        const swimmers = await Swimmer.find({}).populate("user").exec();
        res.status(200).json({ data: swimmers });
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function deleteSwimmer(req, res){
    try {
        await Swimmer.findByIdAndDelete(req.params.id)
        res.status(201).json({});
    } catch(err) {
        res.status(400).json({ err });
    }
}


async function getSwimmer(req, res){
    try {
        const swimmer = await Swimmer.findById(req.params.swimmerId)
        res.status(201).json({ data: swimmer });
    } catch(err) {
        res.status(400).json({ err });
    }
}