const Path = require('path')
const router = require('express').Router()
const passport = require('passport')

/*   Routes for user info  */
router.route('/user').post()

router.route('/user/:id').get()

router.route('user/:id/card').post()

router.route('user/:id/card').get()

router.route('/auth/google').get(passport.authenticate('google', 
	{ scope: 'https://www.googleapis.com/auth/plus.login' })
)

router.route('/auth/google/callback').get(passport.authenticate('google', 
	{ failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/')
  }
)

module.exports = router
