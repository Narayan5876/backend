const mongoose = require('mongoose')
const room = mongoose.model('room',{
   
        roomname: {
            type: String
        },
        roomtype:{
            type : String
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