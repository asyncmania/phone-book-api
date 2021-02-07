import { Request, Response } from "express";
import { UsersController } from "../src/controllers/usersController";
import { IUser } from "../src/models/user";
import { hashPassword } from "../src/utils/utils";
import {
  mockUsersRepository,
  users,
} from "../src/__mocks__/mockUsersRepository";

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe("Users Controller", () => {
  let usersController: UsersController;

  beforeAll(() => {
    usersController = new UsersController(new mockUsersRepository());
  });

  test("User Registration", async () => {
    
    const mockRequest = (user: IUser) => {
      return {
        body: user,
      } as Request;
    };

    const req:Request = mockRequest(users[0]);
    const res:Response = mockResponse();
    const expectedUser = users[0];

    await usersController.register(req, res, null);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      ...expectedUser,
      password: hashPassword(expectedUser.password),
    });
  });
});
