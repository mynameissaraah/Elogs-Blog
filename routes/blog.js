const express = require('express')
const user = express.Router()
const { createBlog, getBlogs, getBlog } = require('../controllers/blogs')
const { filterAndSort, filterByPublished, list, setUserFilter } = require('../middleware/apiFeatures')
const getUserFromToken = require('../middleware/verifyUser')
const pagination = require('../middleware/pagination')

user.route('/')
  .get(filterAndSort, filterByPublished, pagination, list, getBlogs)
  .post(getUserFromToken, createBlog)

user.route('/p')
  .get(getUserFromToken, filterAndSort, setUserFilter, pagination, getBlogs)

user.route('/:id').get(getBlog)

module.exports = router
