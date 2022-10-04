import dotenv from 'dotenv'
import { createTransport } from 'nodemailer';
import twilio from 'twilio'

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
const accountSid = process.env.TWILIOID; 
const authToken = process.env.TWILIOTOKEN; 
const client = twilio(accountSid, authToken);




async function EnvioCorreo(mailOptions) {
    try{
        const info = await trasporter.sendMail(mailOptions);
        //console.log(info)
    }
    catch(error){
        console.log(error)
    }
}

async function EnvioWhats(whatsOption) {
    try{
        const MensajeWhats = await client.messages .create(whatsOption)
        //console.log(info)
    }
    catch(error){
        console.log(error)
    }
}





export default {
    EnvioCorreo,
    EnvioWhats
}

