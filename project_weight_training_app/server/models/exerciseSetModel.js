const mongoose = require('mongoose'); //import mongoose so we can use mongoose to make a table


const ExerciseSetSchema = new mongoose.Schema({




    exerciseSet: {
        type: Array,
        required: [true, "Atleast 1 exercise set is required"]
    },
    exercise_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "exercise"
    }
},
    { timestamps: true } //generates created at and updated at automatically
);

const ExerciseSet = mongoose.model('ExerciseSet', ExerciseSetSchema);

module.exports = ExerciseSet;