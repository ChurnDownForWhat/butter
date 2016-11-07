const db = require('../config/db')
const bookshelf = require('bookshelf')(db)

var User = bookshelf.Model.extend({
  tablename: 'Users'
})  