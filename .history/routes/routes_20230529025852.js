const { Router } = require("express")
const Controller = require('../controllers/controller')

const router = Router()
const db = Controller

// user routes
router.get('/', db.viewUsers); //viewUsers
router.get('/:id', db.viewUser); //viewUsers
router.post('/', db.createUser); //create User
router.post('/auth', db.login); //login
router.put('/', db.updateUser); //update User
router.delete('/', db.deleteUser); //delete User

// post routes
router.push('/post', db.createPost); //create Post
router.delete('/post/:id', db.deletePost); //delete Post
router.get('/post/user/:id', db.viewUserPosts); //view User Posts
router.get('/post/home/:id', db.viewHomePosts); //view Home Posts

// like routes
router.push('/post/like/:id', db.likePost); //Like Post
router.delete('/post/unlike/:id', db.unlikePost); //Unlike Post

// follow routes
router.push('/follow/user/:id', db.followUser); //Follow User
router.delete('/follow/user/:id', db.unfollowUser); //Unfollow User

module.exports = router