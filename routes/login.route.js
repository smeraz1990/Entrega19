import { Router } from 'express'
import Controllers from '../controller/index.controller.js'
import passport from 'passport';
const routerLogin = Router()


//console.log("aqui ando")

routerLogin.route('/').get(Controllers.LoginController.getLogin).post (passport.authenticate("login", { failureRedirect: "/faillogin" }),Controllers.LoginController.postLogin)

export default routerLogin