const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline:{type: String, enum: ['American', 'Southwest', 'United', 'Delta']},
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: {type: Number, required: true, min: 10, max: 9999},
    departs: Date
})

module.exports = mongoose.model('Flight', flightSchema)