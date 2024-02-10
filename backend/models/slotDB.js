const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  numbers: { type: [String], required: true } // Define numbers as an array of strings
}); 

const Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot;

