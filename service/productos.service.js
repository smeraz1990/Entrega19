import productosDao from "../dao/productos.dao.js"

const getAllProductos = async() =>{
    const data = await productosDao.getAllProductos()
    return data
}
const getProductobyID = async({ProductoId}) =>{
    const data = await productosDao.getProductobyID({ProductoId})
    return data
}



export default {
    getAllProductos,
    getProductobyID
}