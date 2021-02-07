import { Application, Request, Response, NextFunction } from "express";
import { ApiError } from "./app.error";

const validationError = (err) => {
  const message = err.errors[0].message;
  return new ApiError(message, 422);
};

export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default function (app: Application) {
  // validation errors
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (
      err.name === "SequelizeUniqueConstraintError" ||
      err.name === "SequelizeValidationError"
    ) {
      const { code, message } = validationError(err);
      res.status(code).json({message})
    }
    next(err);
  });

  // fallthorugh error
  app.use(function onError(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.statusCode = 500;
    res.end(err.message + "\n");
  });
}
