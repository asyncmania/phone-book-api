import { Response } from "express";
import { ICustomRequest } from "../src/middlewares/basicAuth";
import { requireAuth } from "../src/middlewares/requireAuth";
import { IUser } from "../src/models/user";
import { hashPassword } from "../src/utils/utils";

const user: IUser = {
  firstName: "josiah",
  lastName: "derepapa",
  email: "jose@gmail.com",
  password: hashPassword("kilode"),
};

describe("Require Authentication", () => {
  test("Authenticated", () => {
    const mockRequest = () => {
      return {
        user,
      } as ICustomRequest;
    };
    const req = mockRequest();
    const next = jest.fn();

    requireAuth(req, null, next);

    expect(next.mock.calls.length).toBe(1);
  });

  test("Unaunthenticated", () => {
    const mockResponse = () => {
      const res = {} as Response;
      res.sendStatus = jest.fn();
      return res;
    };
    const mockRequest = () => ({} as ICustomRequest);
    const req = mockRequest();
    const res = mockResponse();

    requireAuth(req, res, null);

    expect(res.sendStatus).toHaveBeenCalledWith(401);
  });
});
