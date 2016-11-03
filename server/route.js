import Path from 'path'
import { Router } from 'express'
import passport from './config/passport'

/*   Routes for user info  */
Router.route('/user').post()

Router.route('/user/:id').get()

Router.route('user/:id/card').post()

Router.route('user/:id/card').get()
