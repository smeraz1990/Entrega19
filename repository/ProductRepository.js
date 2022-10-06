import BaseRepository from "./BaseRepository.js";
import ProductsModel from '../models/modelsProductos.js'
const dao = ProductsModel
class ProductRepository extends BaseRepository {
  constructor(dao) {
    super(dao);
    
  }
}
export default ProductRepository




