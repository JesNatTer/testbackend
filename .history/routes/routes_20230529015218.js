const { Router } = require("express")
const Controller = require('./controller')

const router = Router
const db = Controller

// user routes
router.get('/', db.viewUsers); //viewUsers
router.get('/:id', db.viewUser); //viewUsers
router.post('/', db.createUser); //create User
router.post('/auth', db.login); //login
router.put('/', db.updateUser); //update User
router.delete('/', db.deleteUser); //delete User

// post routes
router.push('/post', db.viewUsers); //create Post
router.delete('/post/:id', db.createUser); //delete Post
router.get('/post/user/:id', db.deleteUser); //view User Posts
router.get('/post/home/:id', db.deleteUser); //view Home Posts

// like routes
router.push('/post/like/:id', db.login); //Like Post
router.delete('/post/unlike/:id', db.updateUser); //Unlike Post

// follow routes
router.push('/follow/user/:id', db.login); //Follow User
router.delete('/follow/user/:id', db.updateUser); //Unfollow User

module.exports = router