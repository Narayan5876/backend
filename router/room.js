const express = require('express')
const room = require('../models/room')
const router = new express.Router()
const path = require('path');
const multer = require('multer');
const app = express();

app.use(express.static(path.join(__dirname, "public/images")))


const storage = multer.diskStorage({
  destination:"public/images",
  filename: function(req, file, cb) {
    const ext = path.extname(file.originalname)
    cb(null, Date.now() + "Roompic" + ext);
    //cb(null, "hello" + ext)
  }
});




const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100000000000000000000
  }
});


router.post("/room",upload.single('Img'),(req,res)=>{
   //console.log(req.body)
   var myData = new room({
    roomaddress: req.body.roomaddress,
    roomtype:req.body.roomtype,
    roomavialable:req.body.roomavailable,
    price:req.body.price,
    description:req.body.description,
    Image:req.file.filename
   });
   myData.save();
});



router.get('/room',function(req,res){
    room.find().then(function(user_data){
        res.send(user_data);

    
}).catch(function(e){
    
            res.send(e)
        
    });
})




router.get('/room/:id',function(req,res){
  room.find({uid:req.params.id}).then(function(user_data){
      res.send(user_data);

  
}).catch(function(e){
  
          res.send(e)
      
  });
})

router.post('/viewrooom',function(req,res){
  console.log(req.body)
  room.findById(req.body.roomid).then(function(user_data){
      res.send(user_data);

  
}).catch(function(e){
  
          res.send(e)
      
  });
})



router.delete('/room/:id',function(req,res){
    room.findByIdAndDelete(req.params.id).then(function(){

    }).catch(function(){
        res.send(e)
    })

    
});

router.put('/room/:id',function(req,res){
    room.findOneAndUpdate({_id :req.params.id},req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
    })
})

router.get('/room/single/:id', function(req,res){
  room.findOne({_id :req.params.id}).then(function(user_data){
      res.send(user_data)
  }).catch(function(e){
      res.send(e)
  });
})

module.exports = router