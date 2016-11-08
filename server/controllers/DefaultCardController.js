const DefaultCard = require('../models/DefaultCard')

module.exports = {
  getAllDefaults: (req, res) => {
    DefaultCard.fetchAll()
    .then(cards => res.send(cards))
    .then(() => res.end())
  }
}