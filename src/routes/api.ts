import { Router, Request, Response } from "express";
import * as EmailController from '../controllers/emailController';
import { Auth } from "../middleware/auth";

const router = Router();

router.post('/contato', EmailController.contato)

export default router;