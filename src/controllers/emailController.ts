import { Request, Response } from "express";
import nodemailer from 'nodemailer';


export const contato = (req: Request, res: Response) => {
    //Passo 1: Configurar o transporter (codigo do Mailtrap)
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "72a7b26fbd1263",
          pass: "8e2ed5a74c34db"
        }
      });

      //Passo2: Configurar a mensagem
      

    res.json({pong: true});
}
