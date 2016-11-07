import bookshelf from '../config/db'

var Card = bookshelf.Model.extend({
  tablename: 'Cards'
})