import { Payment } from '@prisma/client';
import prisma from '../../../shared/prisma';

const postPayment = async (paymentData: Payment): Promise<Payment> => {
  const result = await prisma.payment.create({
    data: paymentData,
  });
  return result;
};

export const paymentService = {
  postPayment,
};
