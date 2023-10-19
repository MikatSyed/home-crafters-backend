import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { paymentService } from './payment.service';
import sendResponse from '../../../shared/sendResponse';

const postPayment: RequestHandler = catchAsync(async (req, res) => {
  const result = await paymentService.postPayment(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Payment created successfully',
    data: result,
  });
});

export const PaymentController = {
  postPayment,
};
