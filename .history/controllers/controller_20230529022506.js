const db = require('../models/index')
const bcrypt = require('bcrypt')
const JWT = require('../util/jwt-helper')
const User = db.User
const Post = db.Post
const Like = db.Like
const Follow = db.Follow

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
                const { accessToken, refreshToken } = JWT.createTokens(results.json.user.user_id)
                results.status(200).json(accessToken, refreshToken)
                res.cookie("jwt", refreshToken, {httpOnly: true})
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
            const {accessToken, refreshToken} = JWT.createTokens(user.user_id)
            res.json(accessToken, refreshToken)
        }
        res.cookie("jwt", refreshToken, {httpOnly: true})
    }   else {
        res.status(401).json("incorrect password")
    }
}

const deleteUser = (req, res) => {
    const user_id = JWT.verifyTokens(req.headers.authorization)
    User.findOne({
        where: {
            user_id: user_id
        }
    },(error, results) => {
        if (error) throw error;
        if (!results.row.length) {
            results.json({"response": 'user does not exist'})
        } else {
            User.destroy({
                where: {
                    user_id: user_id
                },
            }, (error, results) => {
                if (error) throw error;
                JWT.deleteTokens()
                res.status(200).json(results.json())
            })
        }
    })
}

const updateUser = (req, res) => {
    const { username, password } = req.body
    const user_id = JWT.verifyTokens(req.headers.authorization)
    User.findOne({
        where: {
            user_id: user_id
        }
    },(error, results) => {
        if (error) throw error;
        if (!results.row.length) {
            results.json({"response": 'user does not exist'})
        } else {
            User.update({
                username: username,
                password: bcrypt(password, bcrypt.hash(10))
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
// post = id, content, userid, likes, createdAt
const createPost = async (req, res) => {
    const content = req.body.content
    const user_id = JWT.verifyTokens(req.headers.authorization)
    await Post.create({
        user_id: user_id,
        content: content
    }, (error, results) => {
        if (error) throw error;
        res.status(202).json(results.row)
    })
}

// const deletePost
const deletePost = async (req, res) => {
    const post_id = req.params.id
    await Post.destroy({
        where: {
            post_id: post_id
        }
    }, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.row)
    })
}


// const likePost
const likePost =  async (req, res) => {
    const post_id = req.params.id
    const user_id = JWT.verifyTokens(req.headers.authorization)
    await Like.create({
            post_id: post_id,
            user_id: user_id
        }, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.row)
    })
}


// const unlikePost
const unlikePost =  async (req, res) => {
    const post_id = req.params.id
    await Like.destroy({
            where: {
                post_id: post_id
            }
        }, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.row)
    })
}

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
    login,
    // ----POSTS----
    createPost,
    deletePost,
    likePost,
    unlikePost,
    // viewUserPosts,
    // viewHomePosts,
    // ----FOLLOW----
    // followUser,
    // unfollowUser
}

// user (create user, view user, delete user, update user, login)
// posts (create post, delete post, like post, unlike post, view user posts, view home posts)
// follows (follow user, unfollow user)
