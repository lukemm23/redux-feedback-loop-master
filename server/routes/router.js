const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



// GET all submits that have been placed, populate with data from the feedback database
router.get('/', (req, res) => {
    // Find all feedbacks and return them
    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error GET', error);
        res.sendStatus(500);  
    });
})


module.exports = router;