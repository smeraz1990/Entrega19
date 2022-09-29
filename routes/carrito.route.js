import { Router } from 'express'
import Controllers from '../controller/index.controller.js'
import checkAuthentication from '../Strategy/CheckAuth.js'
const routerCarrito = Router()

routerCarrito.route('/').get(checkAuthentication,Controllers.CarritoController.getCarrito)
routerCarrito.route('/:ProductoId').get(Controllers.CarritoController.getCarritoID)


export default routerCarrito