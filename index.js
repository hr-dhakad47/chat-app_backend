let express = require("express")
let mongoose = require("mongoose")
let userRouter = require("./src/Routes/userRoutes")
let messageRouter = require("./src/Routes/messagesRoutes")
const cors = require('cors');

let app = express()


app.use(express.json())
app.use(cors());

 

let port = 4001



mongoose.connect("mongodb+srv://chatapp:chatapp@cluster0.pmr84.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((res)=>{
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