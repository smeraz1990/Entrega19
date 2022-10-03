import { Router } from 'express'
import Controllers from '../controller/index.controller.js'
import checkAuthentication from '../Strategy/CheckAuth.js'
const routerMail= Router()

routerMail.route('/').post(checkAuthentication,Controllers.MailController.EnviarCorreo)


export default routerMail