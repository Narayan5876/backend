const mongoose = require('mongoose')
const hotel= mongoose.model('hotel',{
 
        hotelname: {
            type: String
        },
        roomavialable:{
            type : String
        },
        phone:{
            type:String
        },
    
        address: {
            type: String
        },
        email: {
            type: String
        },
        pricepernight:{
            type : String
        },
        description:{
            type : String
        },
        Image: { type: String, 
            required: true }
    })
    module.exports = hotel