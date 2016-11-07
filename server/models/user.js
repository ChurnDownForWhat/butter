const bookshelf = require('../config/db')

var User = bookshelf.Model.extend({
  tablename: 'Users'
})  