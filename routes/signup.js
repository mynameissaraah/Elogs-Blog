const express = require('express')
const user = express.Router()
const { createUser } = require('../controllers/users')

user.route('/').post(createUser)

module.exports = user
