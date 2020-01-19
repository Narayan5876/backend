const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth');


router.post("/upload",(req,res)=>{
    //console.log(req.body)
   var myData = new User(req.body);
   myData.save();
});

//get ko lagi code
router.get('/user',function(req,res){ //without auth 
   // router.get('/user',auth,function(req,res){
    User.find().then(function(user_data){
        res.send(user_data);

    
}).catch(function(e){
    
            res.send(e)
        
    });
})
//yaha sama  get ko code 
// this is for the admin
router.get('/admin_dashboard',auth,function(req,res){
    user_type = req.user_type
    if(user_type=="admin"){
        res.send("hello admin")
    }
    else{
    res.status(401).send({ error: 'Please authenticate.' })
    }
    
    })
    // this is for the user
router.get('/user_dashboard',auth,function(req,res){
    user_type = req.user_type
    if(user_type=="user"){
        res.send("hello user")
    }
    else{
    res.status(401).send({ error: 'Please authenticate.' })
    }
    
    })

    router.get("/admin_dashboard" , auth, function(){


    })


//yaha bata taltira delete ko 
router.delete('/del/:id',function(req,res){
    User.findByIdAndDelete(req.params.id).then(function(){

    }).catch(function(){
        res.send(e)
    })

    
});

router.put('/update/:id',function(req,res){
    User.findOneAndUpdate({_id :req.params.id},req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
  
       
    })
})
router.post("/login22", async function(req,res){
    const user = await User.checkCrediantialsDb(req.body.name , req.body.password)        
    const token = await  user.generateAuthToken()  
        console.log("logged in");

})


module.exports = router