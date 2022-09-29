import { Router } from 'express'
import Controllers from '../controller/index.controller.js'
import checkAuthentication from '../Strategy/CheckAuth.js'
const routerProfile = Router()

routerProfile.route('/').get(checkAuthentication, Controllers.ProfileController.getUserbyName)


export default routerProfile