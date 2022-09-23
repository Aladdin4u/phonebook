const express = require('express')
const router = express.Router()
const phonebookController = require('../controllers/phonebook')

router.get('/', phonebookController.getPhonebook)

router.post('/createPhonebook', phonebookController.createPhonebook)

router.put('/editPhonebook', phonebookController.editPhonebook)

router.delete('/deletePhonebook', phonebookController.deletePhonebook)

module.exports = router