const mongoose = require('mongoose');

const heatsheetSchema = new mongoose.Schema({
    image: String,
    meet: String,
});

module.exports = mongoose.model('Heatsheet', heatsheetSchema);