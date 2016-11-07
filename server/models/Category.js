const db = require('../config/db')
const bookshelf = require('bookshelf')(db)

var Category = bookshelf.Model.extend({
  tablename: 'Categories'
})