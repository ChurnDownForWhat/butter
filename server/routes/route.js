const Path = require('path')
const router = require('express').Router()
const passport = require('passport')
const User = require('../controllers/user')
const Card = require('../controllers/card')
const DefaultCard = require('../controllers/DefaultCardController')
const testData = 

isAuthed = (req,res,next) => req.isAuthenticated() ? next() : res.redirect('/landing')   

router.route('/landing').get((req, res) => res.sendFile(Path.resolve(__dirname, '../../public/landing.html')))

router.route('/').get(isAuthed,(req,res) => res.sendFile(Path.resolve(__dirname, '../../public/index.html')))

router.route('/api/user').post(User.createUser)

router.route('/api/user').get(isAuthed,(req, res) => res.json(req.user))

router.route('/api/user/:id').put()

//create card or update a card
router.route('/api/cards').post(Card.createCard)

//get all cards
router.route('/api/cards').get(Card.getAllCards)
//get one card
router.route('/api/cards/:id').get(Card.getOneCard)
//delete card
router.route('/api/cards/:id').delete(Card.removeCard)
//get default cards
router.route('/api/defaults').get(DefaultCard.getAllDefaults)
// amazon cards 
router.route('/api/amazonSearch/').get()

router.route('/auth/google').get(passport.authenticate('google',
  {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/plus.login'
    ]
  })
)

router.route('/auth/google/callback').get(passport.authenticate('google',
  { failureRedirect: '/landing',
    successRedirect: '/' 
  })
)

router.route('/api/logout').get((req, res) => {
  req.logout()
  res.redirect('/landing')
})

module.exports = router
