const express = require('express')
const Path = require('path')
const routes = require('./route')

// Static assets (html, etc.)
//
const assetFolder = Path.resolve(__dirname, '../public')
routes.use(express.static(assetFolder))

if (process.env.NODE_ENV !== 'test') {
  //
  // The Catch-all Route

  // This is for supporting browser history pushstate.
  // NOTE: Make sure this route is always LAST.
  //
  routes.get('/*', function (req, res) {
    res.sendFile(assetFolder + '/index.html')
  })

  //
  // We're in development or production mode;
  // create and run a real server.
  //
  const app = express()

  // Parse incoming request bodies as JSON
  app.use(require('body-parser').json())

  // Mount our main router
  app.use('/', routes)

  // Start the server!
  const port = process.env.PORT || 4000
  app.listen(port)
  console.log('Listening on port', port)
}
else {
  // We're in test mode; make this file importable instead.
  module.exports = routes
}
