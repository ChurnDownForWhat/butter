const db = require('../config/db')
const bookshelf = require('bookshelf')(db)

const Category = bookshelf.Model.extend({
  tablename: 'Categories'
})
module.exports = Category