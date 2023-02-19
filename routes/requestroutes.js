const { request } = require("express");
const express = require("express")
const router = express.Router();
const requestcontroller = require("../controllers/requestController")


router.post("/send",requestcontroller.request)
router.get("/get",requestcontroller.getrequest)


module.exports = router;