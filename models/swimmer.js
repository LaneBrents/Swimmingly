const mongoose = require('mongoose');

const swimmerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    name: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    events: {
        type: String,
        required: true,
    },
    // notes: [noteSchema],
    // update: [updateSchema],
});

module.exports = mongoose.model('Swimmer', swimmerSchema);


// const noteSchema = new mongoose.Schema(
//     {
//         content: String,
//         user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//         userName: String,
//     },
//     {
//         timestamps: true,
//     }
// );


// const updateSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     grade: {
//         type: String,
//         required: true,
//     },
//     gender: {
//         type: String,
//         required: true,
//     },
//     events: {
//         type: String,
//         required: true,
//     },
// });