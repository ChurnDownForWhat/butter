const Path = require('path')
const router = require('express').Router()
const passport = require('passport')
const user = require('../controllers/user')

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
router.route('/api/cards').post()
//get all cards
router.route('/api/users/:id/cards').get()
//get one card
router.route('/api/cards/:id').get()
//update card
router.route('/api/cards/:id').put()
//delete card
router.route('/api/cards/:id').delete()
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
