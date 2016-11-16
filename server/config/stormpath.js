const stormpath = require('express-stormpath')

module.exports = function(app) {
  app.use(stormpath.init(app, {
    web: {
      login: {
        enabled: true
      },
      logout: {
        enabled: true
      },
      me: {
        enabled: false
      },
      oauth2: {
        enabled: false
      },
      register: {
        enabled: false
      }
    },
    apiKey: {
      id: process.env.STORMPATH_APIKEY_ID,
      secret: process.env.STORMPATH_APIKEY_SECRET
    },
    application: {
      href: process.env.STORMPATH_APPLICATION_HREF
    }
  }))

  app.on('stormpath.ready', function () {
    console.log('Stormpath Ready')
  })
}
