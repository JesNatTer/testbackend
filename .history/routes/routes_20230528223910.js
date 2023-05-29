const {Router} = require("express")
const controller = require('./controller')
const db = require('../models/index')

router.get('/', db.User.view);

module.exports = router