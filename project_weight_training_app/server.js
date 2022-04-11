const express = require("express") //import express
const cors = require("cors")

require('dotenv').config(); //used for reading my secret key in .env and protected by .gitignore

console.log("Secret key is ----->", process.env.SECRET_KEY) //test to show key is read by server.js

const app = express(); //initialize express
const port = 8000; // specify port in a variable

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//require makes it where all the code from the file u are requiring goes on this line
require("./server/config/config")

// //route for hello world for testing purposes
// app.get("/api/hello", (req, res)=>{
//     res.json({msg: "Hello World!"})
// } )

require('./server/routes/routes')(app)

app.listen(port, () => console.log(`Listening on port: ${port}`));