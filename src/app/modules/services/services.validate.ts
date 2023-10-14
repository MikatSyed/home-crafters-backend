import { z } from 'zod';

const createServiceZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
    location: z.string({
      required_error: 'location is required',
    }),
    price: z
      .number({
        required_error: 'price is required',
      })
      .nonnegative(),

    image: z.string({
      required_error: 'image is required',
    }),
    duration: z.string({
      required_error: 'duration is required',
    }),

    categoryId: z.string({
      required_error: 'categoryId is required',
    }),
  }),
});

const updateServiceZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
    price: z.number().optional(),
    image: z.string().optional(),
    duration: z.string().optional(),
    categoryId: z.string().optional(),
  }),
});

export const ServiceValidation = {
  createServiceZodSchema,
  updateServiceZodSchema,
};
