import express from 'express';

import LeaveRouter from './leave';

const router = express.Router();

router.use('/leave', LeaveRouter);

export default router;
