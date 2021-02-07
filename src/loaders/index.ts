import { Application } from "express";
import expressLoader from "./server";
import dependencyInjectorLoader from "./dependencyInjector";
import  dbConfig  from "./db.config.js";
import dbConnection from "./db";

import User from "../models/user";
import Contact from '../models/contact';




export default async (app: Application) => {

  const userModel = {
    name: "userModel",
    model: User,
  };

  const contactModel = {
    name: "contactModel",
    model: Contact
  }


  await dependencyInjectorLoader({
    models: [userModel, contactModel],
  });

  await expressLoader(app);
};
