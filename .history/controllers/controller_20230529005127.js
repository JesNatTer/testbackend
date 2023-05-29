const db = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = db.User

const viewUsers = async (req, res) => {
    await User.findAll((error, results) => {
        if (error) throw error
        res.status(200).json(results.row)
    })
}

const viewUser = async (req, res) => {
    const userId = req.params.id
    await User.findOne({
        where: {
            id: userId
        }
    }, (error, results) => {
        if (error) throw error
        res.status(200).json(results.row)
    })
}

const createUser = async (req, res) => {
    const {username, email, password} = req.body
    await User.findOne({
        where: {
            email: email
        }
    },(error, results) => {
        if (error) throw error;
        if (results.row.length) {
            res.json({"response": 'User already exists. Please enter unique email address'})
        } else {
            User.create({
                username: username,
                email: email,
                password: bcrypt(password, bcrypt.hash(10)),
            }, (error, results) => {
        
                if (error) throw error;
                res.status(200).json(results.row)
            })
        }
    })
}

const login = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({
        where: {
            email: email
        }
    }, (error, res) => {
        if (error) throw error;
        res.status(200);
    })
    if (user) {
        const passwordCorrect = await bcrypt.compare(password, user.password);
        if (passwordCorrect) {
            const token = jwt.sign({id: user.user_id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '60'})
            const refreshToken = jwt.sign({id: user.user_id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '12h'})
            res.json(token, refreshToken)
        }
        res.cookie("jwt", refreshToken, {httpOnly: true})
    }   else {
        res.status(401).json("incorrect password")
    }
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

// const createPost

// const deletePost

// const likePost

// const unlikePost

// const viewUserPosts

// const viewHomePosts

// const followUser

// const unfollowUser

module.exports = {
    // ----USERS-----
    viewUsers,
    viewUser,
    createUser,
    deleteUser,
    updateUser,
    // login,
    // ----POSTS----
    // createPost,
    // deletePost,
    // likePost,
    // unlikePost,
    // viewUserPosts,
    // viewHomePosts,
    // ----FOLLOW----
    // followUser,
    // unfollowUser
}

// user (create user, view user, delete user, update user, login)
// posts (create post, delete post, like post, unlike post, view user posts, view home posts)
// follows (follow user, unfollow user)
