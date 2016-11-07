const bookshelf = require('../config/db')

const DefaultCard = bookshelf.Model.extend({
  tablename: 'DefaultCards'
})