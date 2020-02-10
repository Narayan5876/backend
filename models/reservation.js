const mongoose = require('mongoose')
const reservation = mongoose.model('reservation',{
   
        fullname: {
            type: String
        },
        email:{
            type : String
        },
        phone:{
            type : String
        },
        checkin:{
            type : String
        },
        checkout: { type: String, 
            required: true },

        noofrooms: { type: String, 
            required: true },
        
         noofadult: { type: String, 
            required: true },

         children: { type: String, 
             required: true },
        
        roomtype: { type: String, 
            required: true }
    })


    module.exports = reservation