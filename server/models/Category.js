const bookshelf = require('../config/db')

var Category = bookshelf.Model.extend({
  tablename: 'Categories'
})