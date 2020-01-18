const express = require('express')
require('./database/mongoose')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
const userrouter = require('./router/user')
const cors = require('cors')
app.use(cors())
const productrouter = require('./router/product')





app.use(express.json())





app.listen(3000);
 