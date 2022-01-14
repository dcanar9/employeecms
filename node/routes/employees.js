// import Express and make router obj to handle this route
const express = require("express")
const router = express.Router()

// import employee model
const Employee = require("../models/employee")

// root of this router will display all the employees collection
router.get('/', (req, res)=>{
    
    // query the employee collection
    Employee.find({}, (error, employees)=>{
        if(error){console.log("Error retreiving employees:\n" + error)}

        else{res.json(employees)}
    })
})

// will handle when we add a employee to the db
router.post('/', (req, res) => {


    // create document obj
    const employee = new Employee({
        id: req.fields.id, 
        name: req.fields.name,
        dept: req.fields.dept,
        salary: req.fields.salary,
        location: req.fields.location
    })

    // save the data and handel error if there is one
    employee.save((error) => {
        if(error){
            console.log("Error Entering Employee Into DB " + error)
            res.status(201).end()
        }
    })
})

// delete document by passing id of document we would like to delete
router.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (error)=>{
        if(error){ console.log("Error removing page from DB " + error)}
        else {res.status(204).end();}
    })
})

// will update the data about an employee in the db
router.put('/:id', async(req, res) => {

    await Employee.updateOne({_id:req.fields._id}, {
        id: req.fields.id,
        name: req.fields.name,
        dept: req.fields.dept,
        salary: req.fields.salary,
        location: req.fields.location
    })
})

// export the router to use in the app
module.exports = router