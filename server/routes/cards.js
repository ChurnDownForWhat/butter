const Path = require('path')
const router = require('express').Router()

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