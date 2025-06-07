const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');

// All users can submit complaints
router.post('/create', complaintController.createComplaint);

// Only admin should access this in real apps (you can later add auth middleware)
router.get('/all', complaintController.getAllComplaints);

module.exports = router;
