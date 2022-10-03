import dotenv from 'dotenv'
import { createTransport } from 'nodemailer';

dotenv.config()

const TEST_MAIL = "simon.daniel.meraz@gmail.com"
const trasporter = createTransport ({
    service: "gmail",
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: process.env.PASS
    }
})

async function EnvioCorreo(mailOptions) {
    try{
        const info = await trasporter.sendMail(mailOptions);
        //console.log(info)
    }
    catch(error){
        console.log(error)
    }
}

export default EnvioCorreo

