import { Request, Response } from "express";
import nodemailer from 'nodemailer';


export const contato = async (req: Request, res: Response) => {
    //Passo 1: Configurar o transporter (codigo do Mailtrap)
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "72a7b26fbd1263",
          pass: "8e2ed5a74c34db"
        }
      });

      //Passo 2: Configurar a mensagem
      let message = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.html,
        text: req.body.text
      }

      //Passo 3: Enviar a mensagem
      let info = await transport.sendMail(message);

      console.log('Info', info)

    res.json({success: true});
}
