const mongoose = require('mongoose');

const energySchema = new mongoose.Schema({
    Date: String,
    East_Campus: Number,
    Civil: Number,
    Mech: Number,
    Auto: Number,
    Total: Number,
});

const energy = mongoose.model('energy', energySchema);

module.exports = energy;

