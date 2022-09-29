import { Router } from 'express'
import Controllers from '../controller/index.controller.js'
const routerUsuario = Router()

routerUsuario.route('/').get(Controllers.UserController.getUserbyName)


export default routerUsuario