import express from 'express';

import auth from '../shared/middleware/auth';
import LeaveController from '../controller/leave';
import validate from '../shared/middleware/validator';

const router = express.Router();

router.get(
  '/my-leaves',
  auth,
  validate.LeavesQueryValidator,
  LeaveController.getMyLeaves
);
router.post('/', auth, validate.LeaveValidator, LeaveController.createLeave);
router.get('/', auth, validate.LeavesQueryValidator, LeaveController.allLeaves);
router.get('/:id', auth, LeaveController.leaveById);
router.put(
  '/:id',
  auth,
  validate.LeaveUpdateByAdminValidator,
  LeaveController.leaveUpdateByAdmin
);

export default router;
