import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function getRoot(req, res) {}
import yargs  from "yargs";
import os from "os";
const  cpus = os.cpus();
import logger from './winstonconfig.js';
const yargsExecute = yargs(process.argv.slice(2))
const args = yargsExecute.alias({
    p:"puerto"
}).default({
    puerto: "8080"
}).argv;
import Products from '../models/modelsProductos.js'
import Carrito from '../models/modelsCarrito.js'
let ProductosDB = []





function getProfile(req, res) {
  if (req.isAuthenticated()) {
    //console.log("datos login",req.user)
    let datosnuevos = req.user
    res.render("profile", datosnuevos );
    
  } else {
    //console.log("user NO logueado");
    res.sendFile(path.join(__dirname,"../views/login.html"));
  }
}


async function getCarrito(req, res) {
  if (req.isAuthenticated()) {
    //console.log(req.user)
    //const usuarioid = '632cc9bf33883f520c6092c5'
    const usuarioid = req.user._id.toString()

    const ProductosCarrito = await Carrito.find({ usuarioid: usuarioid},{ productos: 1, _id: 0 })  
    //console.log(ProductosCarrito[0].productos)
    res.render("productosCarrito", {ProductosDB:ProductosCarrito[0].productos} );
    
  } else {
    //console.log("user NO logueado");
    res.sendFile(path.join(__dirname,"../views/login.html"));
  }
}

async function postProductos (req,res)
{
  const { name, price, thumbnail } = req.body
  const newProduct = new Products({
    name,
    price: Number(price),
    thumbnail,
 });

 await newProduct.save();
 res.redirect('/productos');
}



async function getSignup (req, res) {
  const arrayPrefijos = await PrefInt.find().lean()
  //console.log(arrayPrefijos)
  res.render("signup", {arrayPrefijos});
}



function postSignup(req, res) {
  var user = req.user;

  res.sendFile(path.join(__dirname,"../views/index.html"));
}

function getFaillogin(req, res) {
  const {url , method} = req
  logger.error(`Ruta ${method}${url} error en login`);
  res.render("login-error", {});
}

function getFailsignup(req, res) {
  const {url , method} = req
  logger.error(`Ruta ${method}${url} error en signup`);
  res.render("signup-error", {});
}

function getLogout(req, res) {
  req.logout(function(err) {
    if (err) { return next(err); }
    //res.redirect('/');
    res.sendFile(path.join(__dirname,"../views/index.html"));
  });
}

function failRoute(req, res) {
  const {url , method} = req
  logger.warn(`Ruta ${method}${url} no existe`)
  res.status(404).render("routing-error", {});
}

export default {
  getRoot,
  getProfile,
  postProductos,
  getCarrito,
  getFaillogin,
  getLogout,
  failRoute,
  getSignup,
  postSignup,
  getFailsignup
};
