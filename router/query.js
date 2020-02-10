const express = require('express')
const query= require('../models/query')
const router = new express.Router()

router.post("/query",(req,res)=>{
   
   var myData = new query(req.body);
   myData.save();
});


router.get('/query',function(req,res){
    query.find().then(function(user_data){
        res.send(user_data);

    
}).catch(function(e){
    
            res.send(e)
        
    });
})




router.delete('/query/:id',function(req,res){
    query.findByIdAndDelete(req.params.id).then(function(){

    }).catch(function(){
        res.send(e)
    })

    
});

router.put('/query/:id',function(req,res){
    query.findOneAndUpdate({_id :req.params.id},req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
    })
})

module.exports = router