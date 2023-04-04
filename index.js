const express=require("express")
const { connection } = require("./db")
const {RegisterRoute} =require('./routes/regRouter')
const {LoginRoute} =require('./routes/logRouter')
const {CalRegModel} =require("./Model/RegSchema")

const app=express()

app.use(express.json())
app.use('/register',RegisterRoute)
app.use('/login',LoginRoute)


app.get("/",(req,res)=>{
    res.send("home")
})

app.get("/getProfile",async (req,res)=>{
  
    let profileData = await CalRegModel.find()
    res.send(profileData)
})

// console.log(server)

app.listen(8000,async (req,res)=>{
    try {
        await connection
        console.log("connected")
        
    } catch (error) {
        console.log("error while connection")
        console.log(error)
        
    }
    console.log("server is running in 8000")
})