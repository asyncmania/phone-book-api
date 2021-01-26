import { Request, Response, NextFunction } from "express";
import { IUser } from "../models/user";

export interface ICustomRequest extends Request {
  user: IUser;
}

export const basicAuth = (credentialsAreValid: Function) => async (
  req: ICustomRequest,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization || "";
  const [type, payload] = header.split(" ");

  if (type === "Basic") {
    const credentials = Buffer.from(payload, "base64").toString("ascii");
    const [email, password] = credentials.split(":");
    const user = await credentialsAreValid(email, password);

    if (!user) {
      return res.sendStatus(401);
    }
    req.user = user;
  }

  next();
};
