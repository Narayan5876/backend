const mongoose = require('mongoose')
const query = mongoose.model('query',{
   
        fullname: {
            type: String
        },
        email:{
            type : String
        },
        phone:{
            type: String
        },
        query:{
            type : String
        }
      
    })
    module.exports = query