import ProductsModel from '../models/modelsProductos.js'

const getAllProductos = async (req, res) => {
    const ProductosDB = []
    //console.log(req.user)
    const productos = await ProductsModel.find().lean()
    for (let i = 0; i < productos.length; i++)
    {
      ProductosDB.push({
        id: productos[i]._id.toString(),
        name: productos[i].name,
        price: productos[i].price,
        thumbnail: productos[i].thumbnail
      })
    }
    return ProductosDB
    //res.render("productosList", {ProductosDB:productosArray} );
  }

  const getProductobyID = async (req) => {
    const ProductoId = req.ProductoId
    const productonew = await ProductsModel.findById(ProductoId)
    return productonew
    //res.render("productosList", {ProductosDB:productosArray} );
  }



  
  export default {
    getAllProductos,
    getProductobyID
  }