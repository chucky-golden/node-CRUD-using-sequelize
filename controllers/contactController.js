const db = require('../models')

// create main model
const Contact = db.contacts

// main work
//1. create project
const addContact = async (req, res) => {
    try{ 

        // create an objet from the request coming in
        let info = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website,
            message: req.body.message,
        }

        // save to database
        const contacts = await Contact.create(info)
        res.status(200).json({message: 'details saved', data:contacts})
    
    }catch (error) {
        res.json({message: 'Error completing operation:'});
    }
}


//2. get all contacts from table
// const getAlldetails = async (req, res) => {
//     let contacts = await Project.findAll({})

//     if you want so specific columns
//     let contacts = await Project.findAll({
//     attributes: ['name', 'email']
//     })
//     res.status(200).json(contacts)
// }


//3. get single contact from table
// const getOnedetail = async (req, res) => {
//     you find a single detail by id
//     let id = req.params.id
//     let contact = await contact.findOne({ where: {id: id }})
//     res.status(200).json(contact)
// }


//4. update contact from table
// const updatedetail = async (req, res) => {
//     // you find a single detail by id
//     let id = req.params.id
//     const contact = await contact.update(req.body, { where: {id: id }})
//     res.status(200).json(contact)
// }


//5. delete contact from table
// const deletedetail = async (req, res) => {
//     you find a single detail by id
//     let id = req.params.id
//     await contact.destroy({ where: {id: id }})
//     res.status(200).json({message: 'product is deleted'})
// }

module.exports = {
    addContact
}