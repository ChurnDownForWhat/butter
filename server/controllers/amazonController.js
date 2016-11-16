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
      console.log("items",items.TotalResults)
      if(items.TotalResults === '0'){
        console.log("no results")
        res.status(200).send("No Results")
      }else{
        console.log("results")
        res.status(200).send(items)
        
      }
    })
  }

}