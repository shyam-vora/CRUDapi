const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/create", UserController.createUser);
router.post("/users", UserController.getAllUsers);
router.post("/get", UserController.getUserById);
router.post("/update", UserController.updateUser);
router.post("/delete", UserController.deleteUser);

module.exports = router;
