const express = require("express");
const router = express.Router();
const VehicalController = require("../controllers/VehicleController");

router.post("/create", VehicalController.createVehical);
router.post("/get", VehicalController.getVehicalByUserId);
router.post("/update", VehicalController.updateVehical);
router.post("/delete", VehicalController.deleteVehical);

module.exports = router;