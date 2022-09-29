import usuarioDao from "../dao/usuario.dao.js"

const CreateUser = async(req) =>{
    const data = await usuarioDao.CreateUser(req)
    //console.log("datos carrito", data)
    return data
}

const getUserbyName = async({username}) =>{
    const data = await usuarioDao.getUserbyName({username})
    //console.log("datos usuario service", data)
    return data
}
export default {
    CreateUser,
    getUserbyName}