import logger from '../src/winstonconfig.js';
import usuarioService from '../service/usuario.service.js'


const getUserbyName = async(req, res)=>{
    const {url , method} = req
    try{
        {
            const {username} = req
            const response = await  usuarioService.getUserbyName({username})
            //console.log("datos usuario controller",response)
            return response
          }
    }
    catch(err){
        logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}

const CreateUser = async(req,res)=>{
    try{
        {
            const response = await usuarioService.CreateUser(req)
            return response
        }
    }
    catch(err){
        logger.error(`Ruta ${method}${url}:  ${err}`);
    }
}


export default {
    getUserbyName,
    CreateUser
}