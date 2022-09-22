const express = require('express')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const phonebookRoutes = require('./routes/phonebook')
const dotenv = require('dotenv')

// Load config
dotenv.config({ path: '/.config/config.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/phonebook', phonebookRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    