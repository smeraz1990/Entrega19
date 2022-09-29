import { Router } from 'express'
import routerProductos from './productos.route.js'
import routerCarrito from './carrito.route.js'
import routerUsuario from './usuario.route.js'
import routerProfile from './profile.route.js'
const router = Router()

//Empieza el acomo de capas para el proyecto

router.use('/productos',routerProductos)
router.use('/carritos', routerCarrito)
router.use('/usuario',routerUsuario)
router.use('/profile',routerProfile)


export default router