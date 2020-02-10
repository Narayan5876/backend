const express = require('express')
const hotel = require('../models/hotel')
const router = new express.Router()

const path = require('path');
const multer = require('multer');
const app = express();

app.use(express.static(path.join(__dirname, "images")))


const storage = multer.diskStorage({
  destination:"images",
  filename: function(req, file, cb) {
    const ext = path.extname(file.originalname)
    cb(null, Date.now() + "hello" + ext);
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


router.post("/hotel",upload.single('Image'),(req,res)=>{
   
   var myData = new hotel(req.body);
   myData.save();
});


router.get('/hotel',function(req,res){
    hotel.find().then(function(user_data){
        res.send(user_data);

    
}).catch(function(e){
    
            res.send(e)
        
    });
})

router.post('/hotel',function(req,res){
  console.log(req.body)
  hotel.findById(req.body.hotelid).then(function(user_data){
      res.send(user_data);

  
}).catch(function(e){
  
          res.send(e)
      
  });
})


router.delete('/hotel/:id',function(req,res){
    hotel.findByIdAndDelete(req.params.id).then(function(){

    }).catch(function(){
        res.send(e)
    })

    
});

router.put('/hotel/:id',function(req,res){
    hotel.findOneAndUpdate({_id :req.params.id},req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
    })
})

module.exports = router