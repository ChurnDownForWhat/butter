const passport = require('passport')
const Strategy = require('passport-google-oauth')
const User = require('../../models/user')

const GoogleStrategy = Strategy.OAuth2Strategy
module.exports = function(){	
passport.use(new GoogleStrategy({
    clientID: process.env.CONKEY,
    clientSecret: process.env.CONSECRET,
    callbackURL: "http://localhost:4000/auth/google"
  },
  function(token, tokenSecret, profile, done) {
  	console.log(token)
    return done(null, profile)
  }
))
}