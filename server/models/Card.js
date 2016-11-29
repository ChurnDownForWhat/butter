const db = require('../config/db')

const Card = {}

Card.fetchOne = (id) =>
  db('Cards').where({id: id})
  .then(row => row[0])
  .catch(err => err )

Card.fetchAll = (userId) =>
  db('Cards').where({user_id:userId})
  .then(rows => rows)
  .catch(err => err)

Card.update = (id,info) =>
  db('Cards').where({id:id})
  .update(info)
  .returning('id')
  .then(id => id[0])
  .catch(err => err)

Card.delete = (id) =>
  db('Cards').where({id:id})
  .del()
  .returning('id')
  .then(id => id[0])
  .catch(err => err)

Card.wipe = (id) =>
  db('Cards').where({user_id:id})
  .del()
  .then(rows => rows)
  .catch(err => err)

Card.save = (cardData) =>
  db('Cards')
  .insert(cardData)
  .returning('id')
  .then(id => id[0])
  .catch(err => err)


module.exports = Card
