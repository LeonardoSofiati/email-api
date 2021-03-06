import {NextFunction, Request, Response} from 'express';
import { User } from '../models/User';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        let success: boolean = false;

        if(req.headers.authorization) {
            const [authType, token] = req.headers.authorization.split(' ');

            if(authType === 'Bearer'){
                try{
                    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY as string)

                    console.log("DECODED", decoded)

                    success = true;
                } catch (err) {
                    //Não precisa fazer nada que vai cair no erro abaixo do status(403)
                }
            }
        }

        if (success) {
            next();
        } else {
            res.status(403);
            res.json({error: 'Login não autorizado'})
        }
    }
}