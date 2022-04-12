const User = require('../models/model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// module.exports.sayHello = (req,res)=>{
//     res.json({msg: "hello mongoose modularized!!"})
// }

// module.exports.getAllUsers = (req, res) => {
//     console.log("trying to find all users saved in system")
//     User.find()
//         .then(allUsers => {
//             res.json({ results: allUsers })
//         })
//         .catch(err => res.json({ message: "Something went wrong", error: err }))
// }
class UserController {
    //admin controller features for getting all users
    getAllUsers = (req, res) => {
        User.find()
            .then(allUsers => {
                res.json({ results: allUsers })
            })
            .catch(err => {
                res.json({ error: err })
            })
    }



    // register = (req, res) => {
    //     User.create(req.body)
    //         .then(user => {
    //             res.json({ msg: "success!", user: user });
    //         })
    //         .catch(err => res.json(err));
    // }

    //REPLACED register above with register below

    // register = (req, res) => {
    //     User.find({ email: req.body.email })
    //         .then(usersWithExistingEmail => {
    //             console.log("response when finding a user with an already existing email", usersWithExistingEmail)
    //             if (usersWithExistingEmail.length === 0) {

    //             }
    //         })
    //         .catch(err => console.log("ERROR:", err))


    //     User.create(req.body)
    //         .then(user => {
    //             const userToken = jwt.sign({
    //                 id: user._id
    //             }, process.env.SECRET_KEY);

    //             res
    //                 .cookie("usertoken", userToken, process.env.SECRET_KEY, {
    //                     httpOnly: true
    //                 })
    //                 .json({ msg: "success!", user: user });
    //         })
    //         .catch(err => res.json(err));
    // }

    register = (req, res) => {
        User.find({ email: req.body.email })
            .then(usersWithExistingEmail => {
                console.log("response when finding a user with an already existing email", usersWithExistingEmail)
                if (usersWithExistingEmail.length === 0) { //this means the email is not yet taken and we can create a user with this email
                    User.create(req.body)
                        .then(user => {
                            //when the .then() happens that means taht the user from the form was successsfully created and is stored in that variable "user" which has info about the user that was just put into the db, including the field _id
                            const userToken = jwt.sign({
                                id: user._id,
                                firstName: user.firstName
                            }, process.env.SECRET_KEY);

                            //respond with a cookie called "usertoken" which contains the JWT from above called userTokenJWT AND also respond with json with info abou the user who just got created
                            res
                                .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                                    httpOnly: true
                                })
                                .json({ msg: "success!", user: user });
                        })
                        .catch(err => res.json(err));
                } else {
                    //else --> the email is already taken so we will send back an error message
                    res.json({ errors: { email: { message: "This Email Address Has Already Been Registered. Try Logging In!" } } })
                }
            })
            .catch(err => console.log("errr!", err))


    }










    login = async (req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if (!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    }

    logout = (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }

    getLoggedInUser = (req, res) => {
        //use the info stored in the cookie to get the id of the logged in user and query the db to find a user with that id, and return with info about the logged in user
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true })
        // decodedJWT.payload.id
        User.findOne({ _id: decodedJWT.payload.id })
            .then(foundUser => {
                res.json({ results: foundUser })
            })
            .catch(err => {
                res.json(err)
            })
    }

    deleteUser = (req, res) => {
        User.findByIdAndDelete({ _id: req.params.id })
            .then(deletedUser => {


                res.json({ results: deletedUser })
            })
            .catch(err => res.json({ message: "Something went wrong", error: err }))
    }

}

module.exports = new UserController();