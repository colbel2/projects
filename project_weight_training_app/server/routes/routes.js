const UserController = require("../controllers/UserController")

module.exports = app => {
    //admin routes for viwing all users in database. Can delete and edit user accounts.
    app.get("/api/users", UserController.getAllUsers)




















    // app.get("/api/hello", NinjaController.sayHello)

    // app.get("/api/allNinjas", NinjaController.findAll)

    // app.get("/api/oneNinja/:id", NinjaController.findOne)

    // app.post("/api/create/ninja", NinjaController.createNewNinja)

    // app.put("/api/update/:id", NinjaController.updateNinja)

    // app.delete("/api/ninja/:id", NinjaController.deleteNinja)

    // app.get("/api/ninjas/random", NinjaController.findRandomNinja)
}