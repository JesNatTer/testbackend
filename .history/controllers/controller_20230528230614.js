// const jwt
const db = require('../models/index')
const User = db.User

const viewUsers = async (req, res) => {
    await User.findAll((error, results) => {
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
            res.json({"response": 'User already exists. Please enter unique email address'})
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

const login = (res, req) => {

}

const deleteUser = (req, res) => {
    const user_id = req.params.id
    User.findOne({
        where: {
            user_id: user_id
        }
    },(error, results) => {
        if (error) throw error;
        if (!results.row.length) {
            res.json({"response": 'user does not exist'})
        } else {
            User.destroy({
                where: {
                    user_id: user_id
                },
            }, (error, results) => {
        
                if (error) throw error;
                res.status(200).json(results.json())
            })
        }
    })
}

const updateUser = (req, res) => {
    const { username, password } = req.body
    const user_id = req.params.id
    User.findOne({
        where: {
            user_id: user_id
        }
    },(error, results) => {
        if (error) throw error;
        if (!results.row.length) {
            res.json({"response": 'user does not exist'})
        } else {
            User.update({
                username: username,
                password: password
            }, {
                where: {
                    user_id: user_id
                },
            }, (error, results) => {
        
                if (error) throw error;
                res.status(200).json(results.json())
            })
        }
    })
}

module.exports = {
    viewUsers,
    viewUser,
    createUser,
    deleteUser,
    updateUser,
    // login,
}

// user (create user, view user, delete user, update user, login)
// posts (create post, delete post, like post, unlike post, view user posts, view home posts)
// follows (follow user, unfollow user)
