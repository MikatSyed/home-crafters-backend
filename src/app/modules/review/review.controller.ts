import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { ReviewServices } from './review.service';
import catchAsync from '../../../shared/catchAsync';
import { RequestHandler } from 'express';

const postReview: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReviewServices.postReview(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review post successfully',
    data: result,
  });
});

export const ReviewController = {
  postReview,
};
