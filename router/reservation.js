const express = require('express')
const reservation = require('../models/reservation')
const router = new express.Router()

router.post("/reservation",(req,res)=>{
   
   var myData = new reservation(req.body);
   myData.save();
});


router.get('/reservation',function(req,res){
    reservation.find().then(function(user_data){
        res.send(user_data);

    
}).catch(function(e){
    
            res.send(e)
        
    });
})




router.delete('/reservation/:id',function(req,res){
    reservation.findByIdAndDelete(req.params.id).then(function(){

    }).catch(function(){
        res.send(e)
    })

    
});

router.put('/reservation/:id',function(req,res){
    reservation.findOneAndUpdate({_id :req.params.id},req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
    })
})

module.exports = router