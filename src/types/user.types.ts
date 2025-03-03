export interface IUser {
  id: string | undefined;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  lastLogin: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ILoginInput {
  email: string;
  password: string;
}
