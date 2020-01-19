const mongoose = require('mongoose')
const room = mongoose.model('room',{
    // User vhaneko model banako. 
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