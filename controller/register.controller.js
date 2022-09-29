import logger from '../src/winstonconfig.js';
import usuarioService from '../service/usuario.service.js'
import path from 'path';
import {fileURLToPath} from 'url';
import PrefInt from '../models/ModelsPrefijos.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const getSignup = async(req, res)=>{
    const {url , method} = req
    try{
        { 
          const arrayPrefijos = await PrefInt.find().lean()
          //console.log(arrayPrefijos)
          res.render("signup", {arrayPrefijos});
        }
    }
    catch(err){
        logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}
const CreateRegister = async (req, res) => {
   
}
export default {
    getSignup,
    CreateRegister   
}