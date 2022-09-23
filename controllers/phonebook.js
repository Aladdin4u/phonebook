const Phonebook = require('../models/Phonebook')

module.exports = {
    getPhonebook: async (req,res)=>{
        try{
            const phonebookItems = await Phonebook.find()
            res.render('phonebook.ejs', {phonebooks: phonebookItems})
        }catch(err){
            console.log(err)
        }
    },
    createPhonebook: async (req, res)=>{
        try{
            console.log(req.body)
            await Phonebook.create({Phonebook: req.body.items})
            console.log('Contact has been added!')
            res.redirect('/phonebook')
        }catch(err){
            console.log(err)
        }
    },
    editPhonebook: async (req, res)=>{
        try{
            await Phonebook.findOneAndUpdate({_id:req.body.PhonebookIdFromJSFile}
            )
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    deletePhonebook: async (req, res)=>{
        console.log(req.body.PhonebookIdFromJSFile)
        try{
            await Phonebook.findOneAndDelete({_id:req.body.PhonebookIdFromJSFile})
            console.log('Deleted Phonebook')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    