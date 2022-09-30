const mongoose = require('mongoose');

const heatsheetSchema = new mongoose.Schema({
    image: String,
});

module.exports = mongoose.model('Heatsheet', heatsheetSchema);