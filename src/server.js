import express, { application } from 'express'
import session from "express-session"
import passport from 'passport';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { Server } from "socket.io";
import config from './config.js';
import yargs  from "yargs" ;
import cluster from "cluster";
import os from "os";
const app = express()
const  cpus = os.cpus();
import compression from 'compression'
import datosLogin from '../Strategy/LoginStategy.js'
import conectarDB from './controllersdb.js'
import routes from './routes.js'
import routesLogin from '../routes/index.routes.js'
import routesRegister from '../routes/indexregister.routes.js'
import routesapi from '../routes/indexapi.routes.js'
import { engine } from 'express-handlebars';


const yargsExecute = yargs(process.argv.slice(2))
const args = yargsExecute.alias({
    p:"puerto",    
}).default({
    puerto: "8080",
    iscluster: "fork"
}).argv;
app.use(compression())
app.use(express.static(path.join(__dirname, '../views')))
app.use(express.json());
//app.use('/', router)
app.use(express.urlencoded({ extended: true }));
app.use(express.static('avatars'))
app.use(session({
    secret: config.api.apisecret,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie:{
        httpOnly:false,
        secure: false,
        maxAge: config.api.tiemposession,
    }
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use('register',datosLogin.registerStrategy)
passport.use('login',datosLogin.loginStrategy)
passport.serializeUser((user,done)=>{
    done(null,user._id)
})

passport.deserializeUser((id,done)=>{
    datosLogin.User.findById(id,done)
})

//Cambios para agregar cluster y fork
let servidor = ''
if (args.iscluster == "cluster" && cluster.isPrimary) {
    //console.log(`proceso principal ${process.pid}`)
    cpus.map(() => {
        cluster.fork();
    });
 } else {
     servidor = app.listen(process.env.PORT || 3000, () => { 
        datosLogin.logger.info(`Servidor conectado puerto info 3000 PID - ${process.pid}`)
    })
 }

const expressServer = servidor
const io = new Server(expressServer);


app.engine('hbs', engine({
    defaultLayout: path.join(__dirname, '../views/layouts/main.hbs'),
    layoutsDir: path.join(__dirname, '../views/layouts')}))
app.set('view engine', '.hbs');



//Uso de capas
app.get("/", routes.getRoot);
app.use('/login', routesLogin)
app.use('/register', routesRegister)
app.use('/api', routesapi)
app.get("/faillogin", routes.getFaillogin);
app.get("/failsignup", routes.getFailsignup);
//  LOGOUT
app.get("/logout", routes.getLogout);
//  FAIL ROUTE
app.get("*", routes.failRoute);

B(config.database.dbUrl, (err) => {
  if (err) return datosLogin.logger.error("server.js error en conexión de base de datos", err);
  console.log("BASE DE DATOS CONECTADA");
})