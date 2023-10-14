// @typescript-eslint/no-explicit-any
import { Service } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { queryHelpers } from '../../../helpers/queryHelpers';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  ServiceRelationalFields,
  ServiceRelationalFieldsMapper,
  ServiceSearchableFields,
} from './service.constant';
import { IServiceFilters } from './service.interface';

const insertIntoDB = async (data: Service): Promise<Service> => {
  const result = await prisma.service.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

const getAllFromDB = async (
  filters: IServiceFilters,
  options: IPaginationOptions
): Promise<IGenericResponse<Service[]>> => {
  const { limit, page, skip } = queryHelpers.calculatePagination(options);
  const { searchTerm, minPrice, maxPrice, ...filterData } = filters;
  console.log(searchTerm);
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: [
        ...ServiceSearchableFields.map(field => ({
          [field]: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        })),
        {
          category: {
            title: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
        },
      ],
    });
  }

  if (typeof minPrice === 'number' && typeof maxPrice === 'number') {
    andConditions.push({
      price: {
        gte: minPrice,
        lte: maxPrice,
      },
    });
  } else if (typeof minPrice === 'number') {
    andConditions.push({
      price: {
        gte: minPrice,
      },
    });
  } else if (typeof maxPrice === 'number') {
    andConditions.push({
      price: {
        lte: maxPrice,
      },
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (ServiceRelationalFields.includes(key)) {
          return {
            [ServiceRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereConditions: any =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.service.findMany({
    include: {
      category: true,
      reviews: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.service.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getByIdFromDB = async (id: string): Promise<Service | null> => {
  const isserviceExist = await prisma.service.findFirst({
    where: {
      id,
    },
  });

  if (!isserviceExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'service does not exist');
  }

  const result = await prisma.service.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      reviews: true,
    },
  });
  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Service>
): Promise<Service> => {
  const isserviceExist = await prisma.service.findFirst({
    where: {
      id,
    },
  });

  if (!isserviceExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'service does not exist');
  }

  const result = await prisma.service.update({
    where: {
      id,
    },
    data: payload,
    include: {
      category: true,
    },
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Service> => {
  const isserviceExist = await prisma.service.findFirst({
    where: {
      id,
    },
  });

  if (!isserviceExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'service does not exist');
  }
  const result = await prisma.service.delete({
    where: {
      id,
    },

    include: {
      category: true,
    },
  });

  return result;
};

export const ServiceServices = {
  insertIntoDB,
  getAllFromDB,
  // getByCategoryIdFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
