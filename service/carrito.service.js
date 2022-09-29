import carritoDao from "../dao/carrito.dao.js"

const getCarrito = async({usuarioid}) =>{
    const data = await carritoDao.getCarrito({usuarioid})
    //console.log("datos carrito", data)
    return data
}

const getCarritoUsurioID = async({usuarioid,ProductoId}) =>{
    const data = await carritoDao.getCarritoUsurioID({usuarioid,ProductoId})
    //console.log("datos carrito", data)
    return data
}

const updateCarritoID = async({usuarioid,productos}) =>{
    const data = await carritoDao.updateCarritoID({usuarioid,productos})
    //console.log("datos carrito", data)
    return data
}

const createCarrito = async(req) =>{
    const data = await carritoDao.createCarrito(req)
    //console.log("datos carrito", data)
    return data
}







export default {
    getCarritoUsurioID,
    updateCarritoID,
    getCarrito,
    createCarrito}