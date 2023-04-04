const mongoose=require('mongoose')

const calregSchema=mongoose.Schema({
    name:String,
    email:String,
    password:Number
})

const CalRegModel=mongoose.model("calRegData",calregSchema);

module.exports={
    CalRegModel
}