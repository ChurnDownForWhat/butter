const db = require('../config/db')
const bookshelf = require('bookshelf')(db)

const DefaultCard = bookshelf.Model.extend({
  tablename: 'DefaultCards'
})