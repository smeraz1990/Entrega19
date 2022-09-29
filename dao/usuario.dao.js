import UsuarioModel from '../models/modelsUsuario.js'

const CreateUser= async (req) => {
  const UsuarioRegistrado = await UsuarioModel.create(req)

  //console.log("dao carrito",arrayProductos)
  return UsuarioRegistrado

}


const getUserbyName= async (req) => {
  //console.log("usuario dao",req)
  const username = req
  const user = await UsuarioModel.findOne(username)
  //const ProductoExiste = await CarritoModel.find({ usuarioid: usuarioid})

  //console.log("dao carrito",arrayProductos)
  return user

}





  export default {
    CreateUser,
    getUserbyName
  }