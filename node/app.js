// import libs to serve data, read form data, join system paths, mongo, config data, process form data
const express = require("express")
const formidableMiddleware = require("express-formidable")
const path = require("path")
const mongoose = require("mongoose")
const config = require("./config/db")

// ========================== APP VARIABLES ===========================
const port = 3000
const app = express()

// ========================== DATABASE ===========================
// create conenction to db. first pass the server address then the options
mongoose.connect(config.database, {useUnifiedTopology: true, useNewUrlParser: true})

// get connection so we can perform queries
const conn = mongoose.connection

// if there is an error when using the db log this message 
conn.on("error", console.error.bind(console, "Connection Error"))

// log to let us know the connection was succesful
conn.once("open", ()=>{
    console.log("DB Connection Open")
})


// ========================== EXPRESS ===========================

// set static folder for express framework
app.use(express.static(path.join(__dirname, "public")))

// will parse data coming in from requests
app.use(formidableMiddleware())

// Applying headers to follow CORS
app.use(function(req, res, next){ 
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH")
    //res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Requested-With")
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    //res.setHeader("Access-Control-Allow-Headers", true)
    next()      // needed to continue with the rest of the middle ware
})

// import router and apply to application
const employees = require("./routes/employees")
app.use("/employees", employees)

// Start application on port defined above
app.listen(port, () => console.log(`Listening to port ${port}`))