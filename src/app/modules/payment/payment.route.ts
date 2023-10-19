import express from 'express';

import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { PaymentController } from './payment.controller';

const router = express.Router();
router.post(
  '/',

  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  PaymentController.postPayment
);

export const PaymentRoutes = router;
