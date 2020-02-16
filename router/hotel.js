const express = require('express')
const hotel = require('../models/hotel')
const router = new express.Router()

const path = require('path');
const multer = require('multer');
const app = express();

app.use(express.static(path.join(__dirname, "public/images")))


const storage = multer.diskStorage({
  destination:"public/images",
  filename: function(req, file, cb) {
    const ext = path.extname(file.originalname)
    cb(null, Date.now() + "hotelpic" + ext);
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


router.post("/hotel",upload.single('Img'),(req,res)=>{
   //console.log(req.body.filename)
   var myData = new hotel({
     hotelname: req.body.hotelname,
     hoteltype:req.body.hoteltype,
     roomavialable:req.body.roomavailable,
     phone:req.body.phone,
     address: req.body.address,
     email:req.body.email,
     pricepernight:req.body.pricepernight,
     description:req.body.description,
     Image:req.file.filename

   });
   myData.save();
});


router.get('/hotel',function(req,res){
    hotel.find().then(function(user_data){
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
router.post('/viewhotel',function(req,res){
  console.log(req.body)
  hotel.findById(req.body.hotelid).then(function(user_data){
      res.send(user_data);

  
}).catch(function(e){
  
          res.send(e)
      
  });
})

router.get('/hotel/single/:id', function(req,res){
  hotel.findOne({_id :req.params.id}).then(function(user_data){
      res.send(user_data)
  }).catch(function(e){
      res.send(e)
  });
})

module.exports = router