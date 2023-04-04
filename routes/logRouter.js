const {Router} =require('express')
const {CalLogModel} =require('../Model/LoginSchema')

const LoginRoute=Router()


LoginRoute.post("/",async(req,res)=>{
    let logData=new CalLogModel(req.body)
    await logData.save()
    console.log(logData)
    res.send("added login data")
})


module.exports={
    LoginRoute
}