import { Review } from '@prisma/client';
import prisma from '../../../shared/prisma';

const postReview = async (data: Review): Promise<Review> => {
  const result = await prisma.review.create({
    data,
    include: {
      user: true,
      service: true,
    },
  });
  return result;
};

export const ReviewServices = {
  postReview,
};
