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
    app.post("/api/exercises", ExerciseController.createExercise)
    app.get("/api/exercises/:id", ExerciseController.findOneExercise)
    app.put("/api/exercises/:id", ExerciseController.updateExercise)
    app.delete("/api/exercises/:id", ExerciseController.deleteExercise)
}