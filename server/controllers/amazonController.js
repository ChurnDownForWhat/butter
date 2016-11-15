import amazon from '../models/amazonModel.js'

module.exports = {
  getDefault: (req, res) => {
    res.status(200).send()
  },

  getAll: (req, res) => {
    var searchTerm = req.body
    amazon.getAll(searchTerm)
    console.log(searchTerm)
    res.status(200).send()
  }

}