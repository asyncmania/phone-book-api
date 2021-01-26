import { basicAuth, ICustomRequest } from "../src/middlewares/basic-auth";
import { IUser } from "../src/models/user";
import { hashPassword } from "../src/utils/utils";
import { Request, Response } from "express";

const users: IUser[] = [
  {
    firstName: "josiah",
    lastName: "derepapa",
    email: "jose@gmail.com",
    password: hashPassword("kilode"),
  },
];

const mockCredentialAreValid = (email: string, password: string) =>
  users.find(
    (user) => user.email === email && user.password === hashPassword(password)
  );

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.sendStatus = jest.fn();
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

const next = jest.fn();

describe("Basic Authtentication", () => {

  afterEach(() => next.mockClear());

  test("Correct Credentials", async () => {
    const mockRequest = () => {
      return {
        headers: {
          authorization: "Basic am9zZUBnbWFpbC5jb206a2lsb2Rl",
        },
      } as ICustomRequest;
    };

    const req = mockRequest();
    const res = mockResponse();
    await basicAuth(mockCredentialAreValid)(req, res, next);
    expect(req.user).toEqual(users[0]);
    expect(next.mock.calls.length).toBe(1);
  });

  test("Incorrect Credentials", async () => {
    const mockRequest = () => {
      return {
        headers: {
          authorization: "Basic am9pbC5jb206a2lsb2Rl",
        },
      } as ICustomRequest;
    };

    const req = mockRequest();
    const res = mockResponse();
    await basicAuth(mockCredentialAreValid)(req, res, next);

    expect(res.sendStatus).toHaveBeenCalledWith(401)
    expect(next.mock.calls.length).toBe(0);
  });
});
