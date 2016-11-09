const Card = require('../models/Card')


module.exports = {
  createCard: (req, res) => {
    const newCard = req.body
    Card.save(newCard)
    .then(id => res.send(201, id))
  },
  getAllCards: (req, res) => {
    const userId = req.params.id

    Card.fetchAll(userId)
    .then(cards => res.send(200, cards))
    .then(() => res.end())
  },
  getOneCard: (req, res) => {
    const cardId = req.params.id
    Card.fetchOne(cardId)
    .then(card => res.send(200, card))
    .then(() => res.end())
  },
  updateCard: (req, res) => {
    const cardId = req.params.id
    const newInfo = req.body

    Card.update(cardId, newInfo)
    .then(id => Card.fetchOne(id))
    .then(card => res.send(200, card))
    .then(() => res.end())
  },
  removeCard: (req, res) => {
    const cardId = req.params.id
    
    Card.delete(cardId)
    .then(numDel => res.send(200, numDel))
    .then(() => res.end())
  }
}