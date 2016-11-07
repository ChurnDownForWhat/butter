const db = require('../config/db')
const bookshelf = require('bookshelf')(db)

var Card = bookshelf.Model.extend({
  tablename: 'Cards'
})