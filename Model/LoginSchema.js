const mongoose=require('mongoose')

const callogSchema=mongoose.Schema({
   
    email:String,
    password:Number
})

const CalLogModel=mongoose.model("calLogData",callogSchema);

module.exports={
    CalLogModel
}