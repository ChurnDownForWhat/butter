const db = require('../config/db')
const bookshelf = require('bookshelf')(db)

const User = bookshelf.Model.extend({
  tablename: 'Users'
})  
module.exports = User