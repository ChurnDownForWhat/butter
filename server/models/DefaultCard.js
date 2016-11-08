const db = require('../config/db')

const DefaultCard = {}

DefaultCard.fetchAll = () => {
  db('DefaultCards').select('*')
  .then(rows => rows)
  .catch(err => err)
}



module.exports = DefaultCard