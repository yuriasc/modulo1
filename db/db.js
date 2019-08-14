const mongoose = require('mongoose')

mongoose.connect('mongodb://@127.0.0.1/aula', { useNewUrlParser: true })

var UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  active: {
    type: Boolean,
    default: false
  }
})

var User = mongoose.model('User', UserSchema)
module.exports = User
