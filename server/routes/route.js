const Path = require('path')
const router = require('express').Router()
const passport = require('passport')
const User = require('../controllers/user')
const Card = require('../controllers/card')
const DefaultCard = require('../controllers/DefaultCardController')

isAuthed = (req,res,next) => req.isAuthenticated() ? next() : res.redirect('/')   

router.get('/', (req, res) => {
  res.sendFile(Path.resolve(__dirname, '../../public/landing.html'))
})

router.get('/app',(req,res) => {
  res.sendFile(Path.resolve(__dirname, '../../public/index.html'))
})

router.route('/api/user').post(User.createUser)

router.route('/api/user').get(isAuthed,(req, res) => res.json(req.user))

router.route('/api/user/:id').put()

//create card
router.route('/api/cards').post(Card.createCard)
//get all cards
router.route('/api/cards').get(Card.getAllCards)
//get one card
router.route('/api/cards/:id').get(Card.getOneCard)
//update card
router.route('/api/cards/:id').put(Card.updateCard)
//delete card
router.route('/api/cards/:id').delete(Card.removeCard)
//get default cards
router.route('/api/defaults').get(DefaultCard.getAllDefaults)

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
  { failureRedirect: '/',
    successRedirect: '/app' 
  })
)

router.route('/api/logout').get((req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
