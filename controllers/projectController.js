const db = require('../models')

// create main model
const Project = db.projects

// main work
//1. create project
const addProject = async (req, res) => {
    try{ 
        if (req.file == undefined) {
            res.json({message: 'You must select a file.'});
        }

        // create an objet from the request coming in
        let info = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            company: req.body.company,
            help: req.body.help,
            about: req.body.about,
            pimage: req.file.filename,
        }
        
        const projects = await Project.create(info)
        res.status(200).json({message: 'details saved', data: projects})

    }catch (error) {
        console.log(error)
        res.json({message: 'Error completing operation:'});
    }
}


module.exports = {
    addProject
}