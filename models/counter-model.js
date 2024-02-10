const mongoose = require('mongoose')
const {model,Schema} = mongoose
const counterSchema = new Schema({
    count:{
        type:Number,
        default:0,
       
    }
},{timestamps:true})
const Counter = model('Counter',counterSchema)
module.exports = Counter