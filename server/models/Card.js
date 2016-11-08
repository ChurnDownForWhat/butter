const db = require('../config/db')
const bookshelf = require('bookshelf')(db)

const Card = bookshelf.Model.extend({
  tablename: 'Cards'
})
module.exports = Card