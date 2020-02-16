const mongoose = require('mongoose')
const room = mongoose.model('room',{
   
        roomaddress: {
            type: String
        },
        roomtype:{
            type : String
        },
        roomavialable:{
            type:String
        },
        price:{
            type : String
        },
        description:{
            type : String
        },
        Image: { type: String, 
            required: true }
    })
    module.exports = room