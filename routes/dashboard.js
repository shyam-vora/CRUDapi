const express = require("express");
const router = express.Router();
const DashboardController = require("../controllers/DashboardController");

// POST /dashboard/others
router.post("/others", DashboardController.getOtherUsers);
router.post("/commit-members", DashboardController.getCommitMembers);

module.exports = router;
