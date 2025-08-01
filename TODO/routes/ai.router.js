import express from 'express';
import { getAi } from '../controllers/ai.controller';
const router = express.Router();

router.post('/ai',getAi);
export default router;
