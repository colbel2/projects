const mongoose = require('mongoose'); //import mongoose so we can use mongoose to make a table


const WorkoutSchema = new mongoose.Schema({



    
    workoutDate: {
        type: Date,
        required: [true, "Workout date is required"]
    },
    workoutName: {
        type: String,
        required: [true, "Workout Name is required"]
    },
    physiqueUpdatePicture: {
        type: String
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },



    // EXERCISE 1
    exercise1: {
        type: String
    },
    exerciseSets1_1: {
        type: String
    },
    exerciseSets1_2: {
        type: String
    },
    exerciseSets1_3: {
        type: String
    },
    exerciseSets1_4: {
        type: String
    },
    exerciseSets1_5: {
        type: String
    },
    exerciseSets1_6: {
        type: String
    },
    reps1_1: {
        type: Number
    },
    reps1_2: {
        type: Number
    },
    reps1_3: {
        type: Number
    },
    reps1_4: {
        type: Number
    },
    reps1_5: {
        type: Number
    },
    reps1_6: {
        type: Number
    },
    weight1_1: {
        type: String
    },
    notes1_1: {
        type: String
    },
    weight1_2: {
        type: String
    },
    notes1_2: {
        type: String
    },
    weight1_3: {
        type: String
    },
    notes3: {
        type: String
    },
    weight1_4: {
        type: String
    },
    notes1_4: {
        type: String
    },
    weight1_5: {
        type: String
    },
    notes1_5: {
        type: String
    },
    weight1_6: {
        type: String
    },
    notes1_6: {
        type: String
    },


    //EXERCISE 2
    exercise2: {
        type: String
    },
    exerciseSets2_1: {
        type: String
    },
    reps2_1: {
        type: Number
    },
    weight2_1: {
        type: String
    },
    notes2_1: {
        type: String
    },
    exerciseSets2_2: {
        type: String
    },
    reps2_2: {
        type: Number
    },
    weight2_2: {
        type: String
    },
    notes2_2: {
        type: String
    },
    exerciseSets2_3: {
        type: String
    },
    reps2_3: {
        type: Number
    },
    weight2_3: {
        type: String
    },
    notes2_3: {
        type: String
    },
    exerciseSets2_4: {
        type: String
    },
    reps2_4: {
        type: Number
    },
    weight2_4: {
        type: String
    },
    notes2_4: {
        type: String
    },
    exerciseSets2_5: {
        type: String
    },
    reps2_5: {
        type: Number
    },
    weight2_5: {
        type: String
    },
    notes2_5: {
        type: String
    },
    exerciseSets2_6: {
        type: String
    },
    reps2_6: {
        type: Number
    },
    weight2_6: {
        type: String
    },
    notes2_6: {
        type: String
    },


    //EXERCISE 3
    exercise3: {
        type: String
    },

    exerciseSets3_1: {
        type: String
    },
    reps3_1: {
        type: Number
    },
    weight3_1: {
        type: String
    },
    notes3_1: {
        type: String
    },

    exerciseSets3_2: {
        type: String
    },
    reps3_2: {
        type: Number
    },
    weight3_2: {
        type: String
    },
    notes3_2: {
        type: String
    },

    exerciseSets3_3: {
        type: String
    },
    reps3_3: {
        type: Number
    },
    weight3_3: {
        type: String
    },
    notes3_3: {
        type: String
    },

    exerciseSets3_4: {
        type: String
    },
    reps3_4: {
        type: Number
    },
    weight3_4: {
        type: String
    },
    notes3_4: {
        type: String
    },

    exerciseSets3_5: {
        type: String
    },
    reps3_5: {
        type: Number
    },
    weight3_5: {
        type: String
    },
    notes3_5: {
        type: String
    },

    exerciseSets3_6: {
        type: String
    },
    reps3_6: {
        type: Number
    },
    weight3_6: {
        type: String
    },
    notes3_6: {
        type: String
    },


//EXERCISE 4
    exercise4: {
        type: String
    },

    exerciseSets4_1: {
        type: String
    },
    reps4_1: {
        type: Number
    },
    weight4_1: {
        type: String
    },
    notes4_1: {
        type: String
    },

    exerciseSets4_2: {
        type: String
    },
    reps4_2: {
        type: Number
    },
    weight4_2: {
        type: String
    },
    notes4_2: {
        type: String
    },

    exerciseSets4_3: {
        type: String
    },
    reps4_3: {
        type: Number
    },
    weight4_3: {
        type: String
    },
    notes4_3: {
        type: String
    },

    exerciseSets4_4: {
        type: String
    },
    reps4_4: {
        type: Number
    },
    weight4_4: {
        type: String
    },
    notes4_4: {
        type: String
    },

    exerciseSets4_5: {
        type: String
    },
    reps4_5: {
        type: Number
    },
    weight4_5: {
        type: String
    },
    notes4_5: {
        type: String
    },

    exerciseSets4_6: {
        type: String
    },
    reps4_6: {
        type: Number
    },
    weight4_6: {
        type: String
    },
    notes4_6: {
        type: String
    },


    //EXERCISE 5
    exercise5: {
        type: String
    },

    exerciseSets5_1: {
        type: String
    },
    reps5_1: {
        type: Number
    },
    weight5_1: {
        type: String
    },
    notes5_1: {
        type: String
    },

    exerciseSets5_2: {
        type: String
    },
    reps5_2: {
        type: Number
    },
    weight5_2: {
        type: String
    },
    notes5_2: {
        type: String
    },

    exerciseSets5_3: {
        type: String
    },
    reps5_3: {
        type: Number
    },
    weight5_3: {
        type: String
    },
    notes5_3: {
        type: String
    },

    exerciseSets5_4: {
        type: String
    },
    reps5_4: {
        type: Number
    },
    weight5_4: {
        type: String
    },
    notes5_4: {
        type: String
    },

    exerciseSets5_5: {
        type: String
    },
    reps5_5: {
        type: Number
    },
    weight5_5: {
        type: String
    },
    notes5_5: {
        type: String
    },

    exerciseSets5_6: {
        type: String
    },
    reps5_6: {
        type: Number
    },
    weight5_6: {
        type: String
    },
    notes5_6: {
        type: String
    },

    

    //EXERCISE 6
    exercise6: {
        type: String
    },

    exerciseSets6_1: {
        type: String
    },
    reps6_1: {
        type: Number
    },
    weight6_1: {
        type: String
    },
    notes6_1: {
        type: String
    },

    exerciseSets6_2: {
        type: String
    },
    reps6_2: {
        type: Number
    },
    weight6_2: {
        type: String
    },
    notes6_2: {
        type: String
    },

    exerciseSets6_3: {
        type: String
    },
    reps6_3: {
        type: Number
    },
    weight6_3: {
        type: String
    },
    notes6_3: {
        type: String
    },

    exerciseSets6_4: {
        type: String
    },
    reps6_4: {
        type: Number
    },
    weight6_4: {
        type: String
    },
    notes6_4: {
        type: String
    },

    exerciseSets6_5: {
        type: String
    },
    reps6_5: {
        type: Number
    },
    weight6_5: {
        type: String
    },
    notes6_5: {
        type: String
    },

    exerciseSets6_6: {
        type: String
    },
    reps6_6: {
        type: Number
    },
    weight6_6: {
        type: String
    },
    notes6_6: {
        type: String
    },

    //EXERCISE 7
    exercise7: {
        type: String
    },

    exerciseSets7_1: {
        type: String
    },
    reps7_1: {
        type: Number
    },
    weight7_1: {
        type: String
    },
    notes7_1: {
        type: String
    },

    exerciseSets7_2: {
        type: String
    },
    reps7_2: {
        type: Number
    },
    weight7_2: {
        type: String
    },
    notes7_2: {
        type: String
    },
    
    exerciseSets7_3: {
        type: String
    },
    reps7_3: {
        type: Number
    },
    weight7_3: {
        type: String
    },
    notes7_3: {
        type: String
    },

    exerciseSets7_4: {
        type: String
    },
    reps7_4: {
        type: Number
    },
    weight7_4: {
        type: String
    },
    notes7_4: {
        type: String
    },

    exerciseSets7_5: {
        type: String
    },
    reps7_5: {
        type: Number
    },
    weight7_5: {
        type: String
    },
    notes7_5: {
        type: String
    },

    exerciseSets7_6: {
        type: String
    },
    reps7_6: {
        type: Number
    },
    weight7_6: {
        type: String
    },
    notes7_6: {
        type: String
    },


    //EXERCISE 8
    exercise8: {
        type: String
    },

    exerciseSets8_1: {
        type: String
    },
    reps8_1: {
        type: Number
    },
    weight8_1: {
        type: String
    },
    notes8_1: {
        type: String
    },

    exerciseSets8_2: {
        type: String
    },
    reps8_2: {
        type: Number
    },
    weight8_2: {
        type: String
    },
    notes8_2: {
        type: String
    },

    exerciseSets8_3: {
        type: String
    },
    reps8_3: {
        type: Number
    },
    weight8_3: {
        type: String
    },
    notes8_3: {
        type: String
    },

    exerciseSets8_4: {
        type: String
    },
    reps8_4: {
        type: Number
    },
    weight8_4: {
        type: String
    },
    notes8_4: {
        type: String
    },

    exerciseSets8_5: {
        type: String
    },
    reps8_5: {
        type: Number
    },
    weight8_5: {
        type: String
    },
    notes8_5: {
        type: String
    },

    exerciseSets8_6: {
        type: String
    },
    reps8_6: {
        type: Number
    },
    weight8_6: {
        type: String
    },
    notes8_6: {
        type: String
    },


    //EXERCISE 9
    exercise9: {
        type: String
    },

    exerciseSets9_1: {
        type: String
    },
    reps9_1: {
        type: Number
    },
    weight9_1: {
        type: String
    },
    notes9_1: {
        type: String
    },

    exerciseSets9_2: {
        type: String
    },
    reps9_2: {
        type: Number
    },
    weight9_2: {
        type: String
    },
    notes9_2: {
        type: String
    },

    exerciseSets9_3: {
        type: String
    },
    reps9_3: {
        type: Number
    },
    weight9_3: {
        type: String
    },
    notes9_2: {
        type: String
    },

    exerciseSets9_3: {
        type: String
    },
    reps9_3: {
        type: Number
    },
    weight9_3: {
        type: String
    },
    notes9_3: {
        type: String
    },

    exerciseSets9_4: {
        type: String
    },
    reps9_4: {
        type: Number
    },
    weight9_4: {
        type: String
    },
    notes9_4: {
        type: String
    },

    exerciseSets9_5: {
        type: String
    },
    reps9_5: {
        type: Number
    },
    weight9_5: {
        type: String
    },
    notes9_5: {
        type: String
    },

    exerciseSets9_6: {
        type: String
    },
    reps9_6: {
        type: Number
    },
    weight9_6: {
        type: String
    },
    notes9_6: {
        type: String
    },

    
    //EXERCISE 10
    exercise10: {
        type: String
    },
    
    exerciseSets10_1: {
        type: String
    },
    reps10_1: {
        type: Number
    },
    weight10_1: {
        type: String
    },
    notes10_1: {
        type: String
    },

    exerciseSets10_2: {
        type: String
    },
    reps10_2: {
        type: Number
    },
    weight10_2: {
        type: String
    },
    notes10_2: {
        type: String
    },

    exerciseSets10_3: {
        type: String
    },
    reps10_3: {
        type: Number
    },
    weight10_3: {
        type: String
    },
    notes10_3: {
        type: String
    },

    exerciseSets10_4: {
        type: String
    },
    reps10_4: {
        type: Number
    },
    weight10_4: {
        type: String
    },
    notes10_4: {
        type: String
    },

    exerciseSets10_5: {
        type: String
    },
    reps10_5: {
        type: Number
    },
    weight10_5: {
        type: String
    },
    notes10_5: {
        type: String
    },

    exerciseSets10_6: {
        type: String
    },
    reps10_6: {
        type: Number
    },
    weight10_6: {
        type: String
    },
    notes10_6: {
        type: String
    },


    //EXERCISE 11
    exercise11: {
        type: String
    },
    
    exerciseSets11_1: {
        type: String
    },
    reps11_1: {
        type: Number
    },
    weight11_1: {
        type: String
    },
    notes11_1: {
        type: String
    },

    exerciseSets11_2: {
        type: String
    },
    reps11_2: {
        type: Number
    },
    weight11_2: {
        type: String
    },
    notes11_2: {
        type: String
    },

    exerciseSets11_3: {
        type: String
    },
    reps11_3: {
        type: Number
    },
    weight11_3: {
        type: String
    },
    notes11_3: {
        type: String
    },

    exerciseSets11_4: {
        type: String
    },
    reps11_4: {
        type: Number
    },
    weight11_4: {
        type: String
    },
    notes11_4: {
        type: String
    },

    exerciseSets11_5: {
        type: String
    },
    reps11_5: {
        type: Number
    },
    weight11_5: {
        type: String
    },
    notes11_5: {
        type: String
    },

    exerciseSets11_6: {
        type: String
    },
    reps11_6: {
        type: Number
    },
    weight11_6: {
        type: String
    },
    notes11_6: {
        type: String
    },

    
    //EXERCISE 12
    exercise12: {
        type: String
    },

    exerciseSets12_1: {
        type: String
    },
    reps12_1: {
        type: Number
    },
    weight12_1: {
        type: String
    },
    notes12_1: {
        type: String
    },

    exerciseSets12_2: {
        type: String
    },
    reps12_2: {
        type: Number
    },
    weight12_2: {
        type: String
    },
    notes12_2: {
        type: String
    },

    exerciseSets12_3: {
        type: String
    },
    reps12_3: {
        type: Number
    },
    weight12_3: {
        type: String
    },
    notes12_3: {
        type: String
    },

    exerciseSets12_4: {
        type: String
    },
    reps12_4: {
        type: Number
    },
    weight12_4: {
        type: String
    },
    notes12_4: {
        type: String
    },

    exerciseSets12_5: {
        type: String
    },
    reps12_5: {
        type: Number
    },
    weight12_5: {
        type: String
    },
    notes12_5: {
        type: String
    },

    exerciseSets12_6: {
        type: String
    },
    reps12_6: {
        type: Number
    },
    weight12_6: {
        type: String
    },
    notes12_6: {
        type: String
    },

    //diary entry at end of workout
    diary: {
        type: String
    }
},
    { timestamps: true } //generates created at and updated at automatically
);

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;