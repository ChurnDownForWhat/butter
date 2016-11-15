const amazon = require('../models/amazonModel')

module.exports = {
  getDefault: (req, res) => {
    amazon.getDefault().then(x => {
      res.status(200).send(x)
    })
  },

  getAll: (req, res) => {
    var searchTerm = req.body
    amazon.getAll(searchTerm)
    console.log('SEARCH TERM IS', searchTerm)
    res.status(200).send()
  }

}