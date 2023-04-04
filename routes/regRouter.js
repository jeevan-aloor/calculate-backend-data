const {Router} =require('express')
const {CalRegModel} =require('../Model/RegSchema')

const RegisterRoute=Router()


RegisterRoute.post("/",async(req,res)=>{
    let regData=new CalRegModel(req.body)
    await regData.save()
    console.log(regData)
    res.send("added register data")
})


module.exports={
    RegisterRoute
}