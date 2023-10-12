import { Role } from '@prisma/client';

export type IResponseUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  contactNo: string;
  address: string;
  profileImg: string | null;
};
