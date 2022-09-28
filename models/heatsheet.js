const mongoose = require('mongoose');

const heatsheetSchema = new mongoose.Schema(
    {
        image: URL,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Heatsheet', heatsheetSchema);