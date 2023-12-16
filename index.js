let express = require("express")
let mongoose = require("mongoose")
let userRouter = require("./src/Routes/userRoutes")
let messageRouter = require("./src/Routes/messagesRoutes")
const cors = require('cors');

let app = express()


app.use(express.json())
app.use(cors());

 

let port = 4000



mongoose.connect("mongodb+srv://Random404-error:Random404_error@cluster0.zpslsps.mongodb.net/").then((res)=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})

let UserModel = require("./src/models/userModel")
let addUser = require("./src/controler/userControler")

// app.get("/addUser",getUser)

app.use("/",userRouter)
app.use("/message",messageRouter)





app.listen(port,(err)=>{
    if(err)
    {
        console.log("something is wrong")
    }

    console.log(`server is running on port ${port}`)
})