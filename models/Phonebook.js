const mongoose = require('mongoose')

const PhonebookSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model('Phonebook', PhonebookSchema)
