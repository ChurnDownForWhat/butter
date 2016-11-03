#! /usr/bin/env node
require('dotenv').config({silent: true})

const express = require('express')
const Path = require('path')
const session = require('express-session')
const routes = require("./route")
const webpack = require('webpack')
const config = require('../webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const db = require('./config/db')

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
  routes.get('/*', function(req, res){
    res.sendFile( assetFolder + '/index.html' )
  })

  //
  // We're in development or production mode;
  // create and run a real server.
  //
  const app = express()

  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
  // Parse incoming request bodies as JSON
  app.use( require('body-parser').json() )

  require('./config/passport')(app)

  // Mount our main router
  app.use('/', routes)

  // Start the server!
  const port = process.env.PORT || 4000
  app.listen(port)
  console.log("Listening on port", port)
}
else {
  // We're in test mode; make this file importable instead.
  module.exports = routes
}
