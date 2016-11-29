const amazon = {}
const util = require('util')
const OperationHelper = require('apac').OperationHelper

var opHelper = new OperationHelper({
  awsId:     process.env.AWSID,
  awsSecret: process.env.AWSECRET,
  assocId:   process.env.AWASSOCIATEID
})

amazon.getDefault = () =>
  opHelper.execute('ItemSearch', {
    'SearchIndex': 'All',
    'Keywords': 'Amazon Gift Cards',
    'ResponseGroup': 'ItemAttributes,Images,Reviews'
  }).then(response => {
    return response.result.ItemSearchResponse.Items
  })


amazon.getAll = (param) =>
  opHelper.execute('ItemSearch', {
    'SearchIndex': 'All',
    'Keywords': param,
    'ResponseGroup': 'ItemAttributes,Images'
  }).then(response => {
    return response.result.ItemSearchResponse.Items
  })
  // util.inspect(results.ItemSearchResponse.Items.Item[0].ItemAttributes.ListPrice.FormattedPrice

module.exports = amazon
