const Card = require('../models/Card')
const uuid = require('uuid')


module.exports = {
  createCard: (req, res) => {
    const newCard = req.body
    const userId = req.user.id
    if(newCard.id){
      Card.update(newCard.id, newCard)
      .then(id => Card.fetchOne(id))
      .then(card => res.status(200).send(card))
      .then(() => res.end())
      .catch((err) => {
        return res.send('ERROR: COULD NOT SAVE USER')
      })
    } else{
      newCard.user_id = userId
      newCard.id = uuid.v4()
      Card.save(newCard)
      .then(id => {
        res.status(201).send({id: id})})
    }
  },
  getAllCards: (req, res) => {
    const userId = req.user.id
    Card.fetchAll(userId)
    .then(cards => res.status(200).send(cards))
    .then(() => res.end())
  },
  getOneCard: (req, res) => {
    const cardId = req.params.id
    Card.fetchOne(cardId)
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