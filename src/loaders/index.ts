import { Application } from "express";
import expressLoader from "./server";
import dependencyInjectorLoader from "./dependencyInjector";
import  dbConfig  from "./db.config.js";
import dbConnection from "./db";
import User from "../models/user";




export default async (app: Application) => {

  const userModel = {
    name: "userModel",
    model: User,
  };

  await dependencyInjectorLoader({
    models: [userModel],
  });

  await expressLoader(app);
};
