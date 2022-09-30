const Heatsheet = require("../models/heatsheet");

module.exports = {
    create,
    index,
    deleteHeatsheet,
    getHeatsheet
};


async function create(req, res) {
    try {
        const heatsheet = await Heatsheet.create({
            image: req.body.image,
        });

        res.status(201).json({ data: heatsheet });
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function index(req, res) {
    try {
        const heatsheets = await Heatsheet.find({}).populate("user").exec();
        res.status(200).json({ data: heatsheets });
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function deleteHeatsheet(req, res){
    try {
        await Heatsheet.findByIdAndDelete(req.params.id)
        res.status(201).json({});
    } catch(err) {
        res.status(400).json({ err });
    }
}


async function getHeatsheet(req, res){
    try {
        const team = await Heatsheet.findById(req.params.heatsheetId)
        res.status(201).json({ data: heatsheet });
    } catch(err) {
        res.status(400).json({ err });
    }
}