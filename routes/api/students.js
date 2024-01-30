const express = require("express");
// Handle all the route parameters with ease
const router = express.Router();

router.get('/test', (req, res) => {
    res.send("Test API route is working fine")
})

// @router GET api/students
// @description Give all student details
// @access Public
// READ operation
router.get('/', (req, res) => {
    // Student.find()
        // .then((students) => res.json(students))
        // .catch((err) => res.status(404).json({ noStudentsFound: 'MongoDB could not found the Student details' }))
        res.json({ OK: "All Students route is working fine"})
})

// @router GET api/students/:id
// @description Give single student details by ID
// @access Public
// READ and SEARCH operation
router.get('/:id', (req, res) => {
    // Student.findById(req.params.id)
    //     .then((student) => res.json(student))
    //     .catch((err) => res.status(404).json({ noStudentFound: 'MongoDB could not find the Student details' }))
        res.json({ OK: "Get Student by Id route is working fine"})
})

// @router GET api/students
// @description Add new Student details
// @access Public
// CREATE operation
router.post('/', (req, res) => {
    // Student.create(req.body)
    //     .then((student) => res.json({ OK: 'Student added successfully}))
    //     .catch((err) => res.status(400).json({ error: 'Unable to add this Student' }))
        res.json({ OK: "Create Student route is working fine"})
})

// @router GET api/students/:id
// @description Update Student details
// @access Public
// READ, UPDATE & SEARCH operation
router.put('/:id', (req, res) => {
    // Student.findByIdAndUpdate(req.params.id, req.body)
    //     .then((student) => res.json({ OK: 'Student details updated successfully}))
    //     .catch((err) => res.status(400).json({ error: 'Unable to update the Student details' }))
        res.json({ OK: "Update Student route is working fine"})
})

// @router GET api/students/:id
// @description Delete Student details
// @access Public
// READ, DELETE & SEARCH operation
router.delete('/:id', (req, res) => {
    // Student.findByIdAndRemove(req.params.id, req.body)
    //     .then((student) => res.json({ OK: 'Student details deleted successfully}))
    //     .catch((err) => res.status(400).json({ error: 'Unable to delete the Student details' }))
        res.json({ OK: "Delete Student route is working fine"})
})

module.exports = router;