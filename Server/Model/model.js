const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
    Moviename: {
        type: String,
        required: true
    },
    releasedata: {
        type: Date, 
        required: true
    },
    DidyouWatch: {
        type: Boolean,
        required: true,
        default: false
    },
    rating: { 
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    genre: { 
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Alien', alienSchema);
