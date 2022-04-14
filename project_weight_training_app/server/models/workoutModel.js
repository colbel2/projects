const mongoose = require('mongoose'); //import mongoose so we can use mongoose to make a table


const WorkoutSchema = new mongoose.Schema({



    
    workoutDate: {
        type: Date,
        required: [true, "Workout date is required"]
    },
    workoutName: {
        type: String,
        required: [true, "Exercise Name is required"]
    },
    physiqueUpdatePicture: {
        type: String
    }
},
    { timestamps: true } //generates created at and updated at automatically
);

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;