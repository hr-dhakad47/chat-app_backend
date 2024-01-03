const messagePage = require("../controler/messageController")
const express = require("express");
const router = express.Router();



console.log(messagePage)

router.post("/addMessage",messagePage.addMessage)
router.get("/getMessage",messagePage.getMessage)









module.exports = router