const Swimmer = require("../models/swimmer");
const User = require('../models/user');
// const S3 = require("aws-sdk/clients/s3");
// const s3 = new S3(); // initate the S3 constructor which can talk to aws/s3 our bucket!
// // import uuid to help generate random names
// const { v4: uuidv4 } = require("uuid");
// // since we are sharing code, when you pull you don't want to have to edit the
// // the bucket name, thats why we're using an environment variable
// const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
// const SECRET = process.env.SECRET;

module.exports = {
    create,
    deleteSwimmer,
    getUserSwimmers,
    // index,
    // update,
    // edit,
};


async function create(req, res) {
    console.log(req.body, req.user);
    try {
        const swimmer = await Swimmer.create({
            user: req.user,
            name: req.body.name,
            grade: req.body.grade,
            gender: req.body.gender,
            events: req.body.events,
        });

        res.status(201).json({ data: swimmer });
    } catch (err) {
        // res.status(400).json({ err });
    }
}

async function deleteSwimmer(req, res) {
    try {
        await Swimmer.findOneAndDelete({ _id: req.params.id });
        console.log('swimmer was deleted')
        res.json({ data: "swimmer and data was removed" });
    } catch (err) {
        res.status(400).json({ err });
    }
}


async function getUserSwimmers(req, res) {
    try {
        const swimmers = await Swimmer.find({ user: req.user._id }).exec();
        res.status(200).json({
            data: swimmers
        });
    } catch (err) {
        res.status(400).json({ err });
    }
}

// async function index(req, res) {
//     try {
//         const swimmers = await Swimmer.find({});
//         res.status(200).json({ data: swimmers });
//     } catch (err) {
//         res.status(400).json({ err });
//     }
// }

// function edit(req, res) {
//     Swimmer.findById(req.params.id, function (err, swimmerDocumentCreated) {
//         res.render('applications/edit.ejs', {
//             swimmer: swimmerDocumentCreated,
//         });
//     });
// }

// function update(req, res) {
//     Swimmer.findByIdAndUpdate(req.params.id, req.body, function (err, swimmerDocumentCreated) {
//         swimmerDocumentCreated.save(function (err) {
//             res.redirect('/MyTeam');
//         });
//     });
// }