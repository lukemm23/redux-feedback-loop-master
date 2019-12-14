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

// POST feedback submitted, add to DB
router.post('/', (req, res) => {
    const newFeedback = req.body;
    console.log(newFeedback);

    const queryString = `INSERT INTO "feedback" (feeling, understanding, support, comments) VALUES
    ('${newFeedback.feeling}', '${newFeedback.understanding}', '${newFeedback.support}', '${newFeedback.comments}');`;

    pool.query(queryString)
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

//DELETE feedback from admin page to DB
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error DELETE /api/feedback', error);
            res.sendStatus(500);
        })
});


module.exports = router;