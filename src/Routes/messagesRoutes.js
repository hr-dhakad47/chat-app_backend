const messagePage = require("../controler/messageController")
const express = require("express");
const router = express.Router();



console.log(messagePage)

router.post("/addMessage",messagePage.addMessage)
router.get("/getMessage",messagePage.getMessage)
// router.get("/getMessage/:userId", async function (req, res) {
//     const userId = req.params.userId;
//     let user = await messagePage.findById(userId);
//     res.json(user);
//   });








module.exports = router