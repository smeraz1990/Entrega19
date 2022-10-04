import logger from '../src/winstonconfig.js';
import services from '../service/index.service.js'
import HerramientasEnvios from '../components/EmailConfig.js'


const EnviarCorreo = async(req, res)=>{
    const from ='Server Node.js'
    const usuarioid = req.user._id.toString()
    const subject = `Nuevo pedido de: ${req.user.nombre} correo: ${req.user.username}`
    const to = req.user.username
    let htmlTable = ''
    const bodytable = ''
    let TotalCompra = 0
    let TotalArticulos = 0
    const responseProductos = await services.carritoService.getCarrito({usuarioid})
    const arrayProductos = responseProductos[0].productos
    htmlTable = `<table id="gridProductosList" border = "1" style="width: 100%;">
                    <thead class="thead-dark">
                        <th scope="col" align="left">Titulo</th>
                        <th scope="col" align="center">Precio</th>
                        <th scope="col" align="center">cantidad</th>
                    </thead>
                    <tbody>`
    for(let i = 0; i < arrayProductos.length; i++)
    {
        TotalCompra+= TotalCompra + (arrayProductos[i].price * arrayProductos[i].qry)
        TotalArticulos+= TotalArticulos + arrayProductos[i].qry
        htmlTable+= `<tr>
                        <td align="left">${arrayProductos[i].name}</td>
                        <td align="center">${arrayProductos[i].price}</td>
                        <td align="center">${arrayProductos[i].qry}</td>
                    </tr>`
    }
    htmlTable += `</tbody>
                </table>`

    const mailOptions = {
        from,
        to,
        subject,
        html: htmlTable
    }

    console.log(req.user)

    const whatsOption = { 
        body: subject, 
        from: 'whatsapp:+14155238886',       
        to: `whatsapp:${req.user.telefono}`
    }
    HerramientasEnvios.EnvioCorreo(mailOptions)
    HerramientasEnvios.EnvioWhats(whatsOption)
    return {mensaje: "Correo Enviado"}

    //console.log("datos a usar para el correo:", mailOptions)
}
export default {
    EnviarCorreo
}