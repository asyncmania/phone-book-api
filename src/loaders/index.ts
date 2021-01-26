import { Application } from "express";
import expressLoader from "./server";
import dependencyInjectorLoader from "./dependencyInjector";
import dbConnection from "./db";
import User from "../models/user"
export default async (app: Application) => {

  await dbConnection.authenticate()

  const userModel = {
    name: "userModel",
    model: User
  };

  await dependencyInjectorLoader({
    models: [userModel],
  });

  await expressLoader(app);
};
