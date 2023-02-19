const express = require("express")
const router = express.Router();
const admincontroller = require("../controllers/adminController")


router.post("/login",admincontroller.login)
router.post("/signup",admincontroller.signup)


module.exports = router;