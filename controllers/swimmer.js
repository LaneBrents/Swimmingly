const Swimmer = require("../models/swimmer");

module.exports = {
    create,
    index,
    update,
    edit,
    deleteSwimmer,
    getSwimmer
};


async function create(req, res) {
    console.log(req.body, '~~~~~~~~~~~~~~~~~');
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
        const swimmers = await Swimmer.find({});
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

function edit(req, res) {
    Swimmer.findById(req.params.id, function (err, swimmerDocumentCreated) {
        res.render('applications/edit.ejs', {
            swimmer: swimmerDocumentCreated,
        });
    });
}

function update(req, res) {
    Swimmer.findByIdAndUpdate(req.params.id, req.body, function (err, swimmerDocumentCreated) {
        swimmerDocumentCreated.save(function (err) {
            res.redirect('/MyTeam');
        });
    });
}