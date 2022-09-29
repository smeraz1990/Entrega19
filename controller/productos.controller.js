import logger from '../src/winstonconfig.js';
import productosService from '../service/productos.service.js'


const getAllProductos = async(req, res)=>{
    const {url , method} = req
    try{
        const response = await productosService.getAllProductos()
        res.render("productosList", {ProductosDB:response} );

    }
    catch(err){
        logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}
export default {
    getAllProductos
}