import { Router } from 'express'
import routerLogin from './login.route.js'
const router = Router()

router.use('/', routerLogin)

export default router