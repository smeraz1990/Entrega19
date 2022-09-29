import { Router } from 'express'
import Controllers from '../controller/index.controller.js'
import checkAuthentication from '../Strategy/CheckAuth.js'
const routerProductos = Router()


routerProductos.route('/').get(checkAuthentication,Controllers.ProductosController.getAllProductos)
routerProductos.route('/:ProductoId').get()


export default routerProductos