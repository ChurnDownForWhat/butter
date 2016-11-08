const db = require('../config/db')

const User = {}

User.fetch = (email) => 
  db('Users').where({email: email})
  .then(rows => rows[0])
  .catch(err => err )


User.save = (user) => 
  db('Users')
    .insert(user)
    .returning('id')
    .then(id => id[0])


module.exports = User