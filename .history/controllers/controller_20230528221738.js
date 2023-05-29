const db = require('../models/index')
const User = db.User

const viewUsers = (req, res) => {
    User.findAll((error, results) => {
        if (error) throw error
        res.status(200).json(results.row)
    })
}

const viewUser = (req, res) => {
    const userId = req.params.id
    User.findOne({
        where: {
            id: userId
        }
    }, (error, results) => {
        if (error) throw error
        res.status(200).json(results.row)
    })
}

const createUser = (req, res) => {
    const {username, email, password} = req.body
    User.findOne({
        where: {
            email: email
        }
    },(error, results) => {
        if (error) throw error;
        if (results.row.length) {
            res.json({"response": 'user already exists'})
        }
    })
    
    User.create({
        username: username,
        email: email,
        password: password,
    }, (error, results) => {

        if (error) throw error;
        res.status(200).json(results.row)
    })
}

module.exports = {
    createUser,

}
