const Counter = require('../models/counter-model')

CounterCtrl = {}
CounterCtrl.list = async(req,res)=>{
    try{
        const counter = await Counter.find()
        res.json(counter)
    }catch(err){
        console.log(err)
        res.json({notice:'internal server error'})
    }
    }
CounterCtrl.create = async(req,res)=>{
    try{
     const counter = new Counter()
     await counter.save()
     res.status(201).json(counter)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:'internal server error'})
    }
}
CounterCtrl.update = async(req,res) =>{
    const id = req.params.id
    const type=req.query.type
    if(type ==='increment'){
         try{  
            const counter = await Counter.findByIdAndUpdate(id,{$inc:{count:1}},{new:true})
             res.json(counter)  
        }catch(err){
        console.log(err)
        res.json({notice:'internal server error'})
    }
    }else if(type==='decrement'){
        try{
            const counter = await Counter.findByIdAndUpdate(id,{$inc:{count:-1}},{new:true})
            res.json(counter)
        }catch(err){
            console.log(err)
            res.json({notice:'internal server errors'})
        }
    }else if(type === 'reset'){
        try{
            const counter = await Counter.findByIdAndUpdate(id,{$set:{count:0}},{new:true})
            res.json(counter)
        }catch(err){
            console.log(err)
            res.status(500).json({notice:'internal server errors'})
        }
    }
}
CounterCtrl.destroy = async(req,res)=>{
 const id = req.params.id
 try{
    const counter = await Counter.findByIdAndDelete(id)
    res.json(counter)
 }catch(err){
    console.log(err)
    res.json({notice:'internal server errors'})
 }
}

module.exports=CounterCtrl