import { Router } from 'express'
import Controllers from '../controller/index.controller.js'
import passport from 'passport';
import upload from '../MulterFiles/MulterConfig.js';
const routerLogin = Router()

//console.log("aqui ando")
routerLogin.route('/').get(Controllers.RegisterController.getSignup).post(upload.single('avatar'),passport.authenticate("register", { failureRedirect: "/failsignup" }),Controllers.LoginController.postLogin)

export default routerLogin