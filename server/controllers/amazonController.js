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
      if(items.TotalResults === '0'){
        res.status(200).send("No Results")
      }else{
        res.status(200).send(items)
        
      }
    })
  }

}