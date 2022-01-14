// import mongo module
const mongoose = require("mongoose")
const Double = require('@mongoosejs/double') //plugin to support Double in mongoose

// create schema to map to collection and define the shape of the documents
const employeeSchema = mongoose.Schema({
    id: Number,
    name:  String,
    dept: String,
    salary: Double,
    location: String
});

// Create the model & export
const Employee = (module.exports=mongoose.model("Employee", employeeSchema))
