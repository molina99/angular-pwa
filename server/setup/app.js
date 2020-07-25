const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
require('../config/db')

let app = express()
let userRoutes = require('../routes/user.routes')

// For access client
let corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// CORS
app.use(cors(corsOptions))

// PASSPORT
app.use(passport.initialize())

app.use('/api', userRoutes)

module.exports = app
