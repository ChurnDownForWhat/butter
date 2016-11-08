const Users = require('../collections/users')
const User = require('../models/user')

module.exports = {

  storeUser: (req,res) => {
    const body = req.body
    console.log(body)

    new User({email: body.email})
    .fetch()
    .then((user) => {
      if(!user){
        const newUser = new User({
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
        })
        newUser
        .save()
        .then((user) => {
          console.log(user)
          return res.status(201).send(user)
        })
        .catch((err) => {
          return res.send({Error: "Could not store user"})
        })
      } else {
        return res.send({Error: "User already exist"})
      }

    })
  },

  getUsers: (req,res) => {
    User.fetch()
      .then((users) => {
        return res.status(200).send({users: users})
      })
  }
}