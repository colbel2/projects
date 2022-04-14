const mongoose = require('mongoose'); //import mongoose so we can use mongoose to make a table


const SetRepsSchema = new mongoose.Schema({




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

const SetReps = mongoose.model('SetReps', SetRepsSchema);

module.exports = SetReps;