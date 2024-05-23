const express = require('express')
const bodyParser = require('body-parser')
//Local Imports 
const connectDb = require('./db.js')
const employeeRoutes = require('../server/controllers/employe.controller.js')
const app = express()
const cors = require('cors')
const { errorHandler } = require('./middlewares')

app.use(cors())
//middleware
app.use(bodyParser.json())
app.use('/api/employees', employeeRoutes)

app.use(errorHandler)



connectDb()
    .then(() => {
        console.log('db Connection established')
        app.listen(3000, 
            () => console.log('Server started at 3000'))
     })
    .catch(err => console.log(err))
