const mongoose = require('mongoose'); //import mongoose so we can use mongoose to make a table


const SetWeightSchema = new mongoose.Schema({




    SetWeight: {
        type: Number
    },
    exerciseSet_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExerciseSet"
    }
},
    { timestamps: true } //generates created at and updated at automatically
);

const SetWeight = mongoose.model('SetWeight', SetWeightSchema);

module.exports = SetWeight;