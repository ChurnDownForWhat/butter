import bookshelf from '../config/db'

var User = bookshelf.Model.extend({
  tablename: 'DefaultCards'
})