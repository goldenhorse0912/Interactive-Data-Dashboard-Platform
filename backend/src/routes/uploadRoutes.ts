import { Router } from 'express';
//import { post } from '../controllers/uploadController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

//router.post('/upload', post);

export default router;
