;
'use strict'

const mongoose = require('mongoose')
const {USER_DB, PASS_DB, HOST_DB, NAME_DB} = process.env

const uri = `mongodb+srv://${USER_DB}:${PASS_DB}@${HOST_DB}/${NAME_DB}?retryWrites=true&w=majority`

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB connected'))
  .catch(err => console.error(err))
