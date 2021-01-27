import { IUser } from "../models/user";
import { IUserRepository } from "../repositories/userRepository";
import { hashPassword } from "../utils/utils";

export const users: IUser[] = [
  {
    firstName: "josiah",
    lastName: "derepapa",
    email: "jose@gmail.com",
    password: "japajapa_10",
  },
];

export class MockUsersController implements IUserRepository {
  async create(user: IUser): Promise<IUser> {
    return user;
  }

  async findOne(email: string): Promise<IUser> {
    return users.find((user) => user.email === email);
  }
}
