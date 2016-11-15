const amazon = {}

amazon.getDefault = () =>
  opHelper.execute('ItemSearch', {
    'SearchIndex': 'All',
    'Keywords': 'Amazon Gift Cards',
    'ResponseGroup': 'ItemAttributes,Images'
  }, function(error, results) {
    if (error) { console.log('Error: ' + error + '\n') }
  // console.log('Results:\n' + util.inspect(results) + '\n')
  // console.log('RESULTS ARE!~!~!~!', util.inspect(results.ItemSearchResponse.Items.Item))
  // util.inspect(results.ItemSearchResponse.Items.Item[0].ItemAttributes.ListPrice.FormattedPrice
    return util.inspect(results.ItemSearchResponse.Items.Item)
  })



amazon.getAll = (param) =>
  opHelper.execute('ItemSearch', {
    'SearchIndex': 'All',
    'Keywords': param,
    'ResponseGroup': 'ItemAttributes,Images'
  }, function(error, results) {
    if (error) { console.log('Error: ' + error + '\n') }
  // console.log('Results:\n' + util.inspect(results) + '\n')
  // console.log('RESULTS ARE!~!~!~!', util.inspect(results.ItemSearchResponse.Items.Item))
  // util.inspect(results.ItemSearchResponse.Items.Item[0].ItemAttributes.ListPrice.FormattedPrice
    return util.inspect(results.ItemSearchResponse.Items.Item)
  })

module.exports = amazon