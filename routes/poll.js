const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');

router.post('/', pollController.createPoll);
router.post('/vote', pollController.vote);
router.get('/', pollController.getPolls);

module.exports = router;
