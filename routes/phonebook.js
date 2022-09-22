const express = require('express')
const router = express.Router()
const phonebookController = require('../controllers/phonebook')

router.get('/', phonebookController.getphonebook)

router.post('/createTodo', phonebookController.createTodo)

router.put('/markComplete', phonebookController.markComplete)

router.put('/markIncomplete', phonebookController.markIncomplete)

router.delete('/deleteTodo', phonebookController.deleteTodo)

module.exports = router