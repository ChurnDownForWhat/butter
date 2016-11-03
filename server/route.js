const Path = require('path')
const router = require('express').Router()
// import passport from './config/passport'

/*   Routes for user info  */
router.route('/user').post()

router.route('/user/:id').get()

router.route('user/:id/card').post()

router.route('user/:id/card').get()

module.exports = router
