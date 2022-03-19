import { Router, Request, Response } from "express";
import * as ApiController from '../controllers/apiController';
import { Auth } from "../middleware/auth";

const router = Router();

router.get('/ping', ApiController.ping)

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list', Auth.private ,ApiController.list)

export default router;