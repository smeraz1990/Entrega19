import { Router } from 'express'
import routerRegister from './register.route.js'
const router = Router()

router.use('/', routerRegister)

export default router