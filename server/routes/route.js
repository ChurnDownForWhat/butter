const Path = require('path')
const router = require('express').Router()
const passport = require('passport')
const User = require('../controllers/user')
const Card = require('../controllers/card')

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Components/index.js'))
})

router.route('/api/user').post(function(req,res,done){
  console.log(req.body)
  done()
},user.createUser)

router.route('/api/user/:id').get(function(req,res){
  console.log("TOP KEK")
  res.send({lol:'suh'})
})

router.route('/api/user/:id').put()

//create card 
router.route('api/cards').post(Card.createCard)
//get all cards
router.route('api/users/:id/cards').get(Card.getAllCards)
//get one card
router.route('api/cards/:id').get(Card.getOneCard)
//update card
router.route('api/cards/:id').put(Card.updateCard)
//delete card
router.route('api/cards/:id').delete(Card.removeCard)
//get default cards
router.route('/api/default').get()

router.route('/auth/google').get(passport.authenticate('google', 
	{ scope: 'https://www.googleapis.com/auth/plus.login' })
)

router.route('/auth/google/callback').get(passport.authenticate('google', 
	{ failureRedirect: '/api/login' }),
  (req, res) => {
    res.redirect('/')
  }
)
router.route('/api/logout').get((req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
