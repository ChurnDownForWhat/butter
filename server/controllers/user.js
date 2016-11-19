const User = require('../models/user')
const Card = require('../models/card')
const uuid = require('uuid')
module.exports = {

  createUser: (req,res) => {
    const body = req.body

    User
    .fetch(body.email)
    .then((user) => {
      if(!user){
        const newUser = {
          id: uuid.v4(),
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
        }
        User
        .save(newUser)
        .then((id) => {
          return res.status(201).send({id: id})
        })
        .catch((err) => {
          return res.status(500).send({Error: err})
        })
      } else {
        return res.status(403).send({Error: "User already exist"})
      }

    })
  },

  removeUser: (req, res) => {
    const user = req.user.id
    Card.whipe(user)
    .then(v => User.remove(user))
    .then(v => res.redirect('/landing'))
    .catch(err => console.log(err))
  }
}