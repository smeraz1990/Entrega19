import BaseRepository from "./BaseRepository.js";
import UsuarioModel from '../models/modelsUsuario.js'
const dao = UsuarioModel
class UserRepository extends BaseRepository {
  constructor(dao) {
    super(dao);
  }
}

export default UserRepository