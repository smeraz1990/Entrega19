import BaseRepository from "./BaseRepository.js";
import CarritoModel from '../models/modelsCarrito.js'
const dao = CarritoModel
class CarritoRepository extends BaseRepository {
  constructor(dao) {
    super(dao);
  }
}

export default CarritoRepository