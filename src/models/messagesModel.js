const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true,
    },
    
})
 
const MessageModel =  mongoose.model("messages",MessageSchema)


module.exports = MessageModel