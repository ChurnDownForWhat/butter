import bookshelf from '../config/db'

var Category = bookshelf.Model.extend({
  tablename: 'Categories'
})