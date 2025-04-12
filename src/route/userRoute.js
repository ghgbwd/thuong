const express = require('express')
const { createUserController, getAllUserController, getUserByIDController } = require("../controller/userController");

let router = express.Router();
router.post("/create", createUserController)
router.get("/users", getAllUserController)
router.get("/user/:id", getUserByIDController)

module.exports = router;