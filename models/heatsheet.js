const mongoose = require('mongoose');

const heatsheetSchema = new mongoose.Schema({
    image: URL,
});

module.exports = mongoose.model('Heatsheet', heatsheetSchema);