const Card = require('../models/Card')
const uuid = require('uuid')


module.exports = {
  createCard: (req, res) => {
    const newCard = req.body
    newCard.id = uuid.v4()
    Card.save(newCard)
    .then(id => res.status(201).send({id: id}))
  },
  getAllCards: (req, res) => {
    const userId = req.user.id
    Card.fetchAll(userId)
    .then(cards => {
      const data = {
        user: req.user,
        cards: cards
      }
      return res.status(200).send(data)
    })
    .then(() => res.end())
  },
  getOneCard: (req, res) => {
    const cardId = req.params.id
    Card.fetchOne(cardId)
    .then(card => res.status(200).send(card))
    .then(() => res.end())
  },
  updateCard: (req, res) => {
    const cardId = req.params.id
    const newInfo = req.body

    Card.update(cardId, newInfo)
    .then(id => Card.fetchOne(id))
    .then(card => res.status(200).send(card))
    .then(() => res.end())
  },
  removeCard: (req, res) => {
    const cardId = req.params.id
    
    Card.delete(cardId)
    .then(numDel => res.status(200).send({id: numDel}))
    .then(() => res.end())
  }
}