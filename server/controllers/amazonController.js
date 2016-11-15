const amazon = require('../models/amazonModel')

module.exports = {
  getDefault: (req, res) => {
    amazon.getDefault().then(items => {
      res.status(200).send(items)
    })
  },

  getAll: (req, res) => {
    var searchTerm = req.body.searchTerm
    amazon.getAll(searchTerm).then(items => {
      console.log("items",items)
      res.status(200).send(items)
    })
  }

}