const Card = require('../models/Card')

module.exports = {
  createCard: function(newCard){
    Card.save(newCard)
    .then(id => res.send(id))
    .then(() => res.end())
  },
  getAllCards: function(userId){
    Card.fetchAll(userId)
    .then(cards => res.send(cards))
    .then(() => res.end())
  },
  getOneCard: function(cardId){
    Card.fetchOne(cardId)
    .then(card => res.send(card))
    .then(() => res.end())
  },
  updateCard: function(cardId, newInfo){
    Card.update(cardId, newInfo)
    .then(id => res.send(id))
    .then(() => res.end())
  },
  removeCard: function(cardId){
    Card.delete(cardId)
    .then(name => res.send(name))
    .then(() => res.end())
  }
}