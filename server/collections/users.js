const db = require('../config/db')
const User = require('../models/user')
const bookshelf = require('bookshelf')(db)

const Users = new bookshelf.Collection()

Users.model = User

module.exports = Users