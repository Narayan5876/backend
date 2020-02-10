const express = require('express')
require('./database/mongoose')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
const userrouter = require('./router/user')

const cors = require('cors')
app.use(cors())
const roomrouter = require('./router/room')
const hotelrouter = require('./router/hotel')
const queryrouter = require('./router/query')
const reservationrouter = require('./router/reservation')

app.use(express.json())
app.use((req,res,next)=>{
    next();
})
app.use("/public", express.static(__dirname + '/public/'))

app.use(userrouter)
app.use(roomrouter)
app.use(hotelrouter)
app.use(queryrouter)
app.use(reservationrouter)
app.use(cors)






app.listen(4000,()=>{
    console.log("server is running");
});
 