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

    register = (req, res) => {
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY);

                res
                    .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
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