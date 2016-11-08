const passport = require('passport')
const Strategy = require('passport-google-oauth')
const User = require('../../models/user')

const GoogleStrategy = Strategy.OAuth2Strategy
module.exports = function(){	
  passport.use(new GoogleStrategy({
    clientID: process.env.CONKEY,
    clientSecret: process.env.CONSECRET,
    callbackURL: 'http://localhost:4000/auth/google/callback'
  },
  function(token, tokenSecret, profile, done) {
    const email = profile.emails[0].value
    const firstName = profile.name.givenName
    const lastName = profile.name.familyName
    User.fetch(email)
    .then((user) => {
      if(!user){
        const newUser = {
          email: email,
          firstName: firstName,
          lastName: lastName
        }
        User.save(newUser)
        .then((id) => {
          newUser.id = id
          newUser.token = token
          return done(null, newUser)
        })
        .catch((err) => {
          throw new Error('Failed to save user info!')
        })
      } else {
        return done(null, user)
      }
    })
    .catch((err) => {
      throw new Error('Fetch failed! Failed to contact database!')
    })   
  }
))
}