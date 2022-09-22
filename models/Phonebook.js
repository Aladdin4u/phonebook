const mongoose = require('mongoose')

const PhonebookSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('Phonebook', PhonebookSchema)
