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
    cb(null, Date.now() + "_roompicture" + ext);
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
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.post("/room",upload.single('Image'),(req,res)=>{
   
   var myData = new room(req.body);
   myData.save();
});



router.get('/getroom',function(req,res){
    room.find().then(function(user_data){
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




router.delete('/delroom/:id',function(req,res){
    room.findByIdAndDelete(req.params.id).then(function(){

    }).catch(function(){
        res.send(e)
    })

    
});

router.put('/updateroom/:id',function(req,res){
    room.findOneAndUpdate({_id :req.params.id},req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
    })
})

module.exports = router