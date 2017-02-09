const passport = require('passport')
const Strategy = require('passport-google-oauth')
const User = require('../../models/user')
const uuid = require('uuid')

const GoogleStrategy = Strategy.OAuth2Strategy

const callbackURL = process.env.NODE_ENV !== 'production' ? 
                'http://localhost:4000/auth/google/callback' :
                'https://abutterapp.herokuapp.com/auth/google/callback'

module.exports = function(){
  passport.use(new GoogleStrategy({
    clientID: process.env.CONKEY,
    clientSecret: process.env.CONSECRET,
    callbackURL
  },
  function(token, tokenSecret, profile, done) {
    const email = profile.emails[0].value
    const firstName = profile.name.givenName
    const lastName = profile.name.familyName
    User.fetch(email)
    .then((user) => {
      if(!user){
        const newUser = {
          id: uuid.v4(),
          email: email,
          firstName: firstName,
          lastName: lastName
        }
        User.save(newUser)
        .then((id) => {
          newUser.token = token
          return done(null, newUser)
        })
        .catch((err) => {
          throw new Error(err)
        })
      } else {
        return done(null, user)
      }
    })
    .catch((err) => {
      throw new Error(err)
    })
  }
))
}
