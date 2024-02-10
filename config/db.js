const mongoose = require('mongoose')
const ConfigDB = async()=>{
    try{
      const db = await mongoose.connect('mongodb://127.0.0.1:27017/counter')
      console.log('successfully connected to database') 
    }catch(err){
        console.log('error in connecting' , err)
    }
}
module.exports = ConfigDB