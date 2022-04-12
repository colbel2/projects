const UserController = require("../controllers/UserController")
const ExerciseController = require("../controllers/ExerciseController")
module.exports = app => {
    //admin routes for viwing all users in database. Can delete and edit user accounts.
    app.get("/api/users", UserController.getAllUsers)
    app.post("/api/users/register", UserController.register )
    app.post("/api/users/login", UserController.login)
    app.get("/api/users/getloggedinuser", UserController.getLoggedInUser)
    app.get("/api/users/logout", UserController.logout)

    app.delete("/api/users/:id", UserController.deleteUser)

    app.get("/api/exercises", ExerciseController.getAllExercises)
    app.post("/api/exercises/create", ExerciseController.createExercise)
















    // app.get("/api/hello", NinjaController.sayHello)

    // app.get("/api/allNinjas", NinjaController.findAll)

    // app.get("/api/oneNinja/:id", NinjaController.findOne)

    // app.post("/api/create/ninja", NinjaController.createNewNinja)

    // app.put("/api/update/:id", NinjaController.updateNinja)

    // app.delete("/api/ninja/:id", NinjaController.deleteNinja)

    // app.get("/api/ninjas/random", NinjaController.findRandomNinja)
}