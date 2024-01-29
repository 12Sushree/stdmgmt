const express = require("express");
// Handle all the route parameters with ease
const router = express.Router();

router.get('/test', (req, res) => {
    res.send("Test API route is working fine")
})

// @router GET api/students
// @description Give all student details
// @access Public
router.get('/', (req, res) => {
    // Student.find()
        // .then((students) => res.json(students))
        // .catch((err) => res.status(404).json({ nostudentsfound: 'MongoDB could not found the Student details' }))
        res.json({ OK: "All Students route is working fine"})
})

module.exports = router;