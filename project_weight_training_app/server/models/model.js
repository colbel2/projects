const mongoose = require('mongoose'); //import mongoose so we can use mongoose to make a table
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({



    firstName: {
        type: String,
        required: [true, "First Name is Required!"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is Required!"]
    },
    email: {
        type: String,
        required: [true, "Email is Required!"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test (val),
            mmessage: 'Please enter a valid email'
        }
    },
    password: {
        type: String,
        required: [true, "Password is Required!"],
        minlength: [4, 'Password must be atleast 4 characters']
    },
},
    { timestamps: true } //generates created at and updated at automatically
);
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value); // creates a virtual field called "confirmPassword" that is used to match the validated password


//before (pre) saving the user to the database, validate the user objects passwords match. 
UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password'); // if the passwords do not match then this will happen
    }
    next(); //after the above process is done, next proceeds on to the next usual step
});

//before (pre) saving the user to the db (this means we have passed the validations), hash the users password (encrypt it)
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});


const User = mongoose.model('User', UserSchema);

module.exports = User;