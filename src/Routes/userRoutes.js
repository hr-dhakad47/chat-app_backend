const express = require("express");
const router = express.Router();
const UserPage = require("../controler/userControler")
const sendMessage = require("../controler/messageController")

console.log(UserPage)
console.log(sendMessage)

router.post("/addUser",UserPage.addUser)
router.get("/getUser/:userId",UserPage.getUser)
router.get("/getUsers",UserPage.getUsers)
router.post("/login",UserPage.login)







module.exports = router