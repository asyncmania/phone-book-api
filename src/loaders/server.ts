import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "../config";
import routes from '../routes'
import { basicAuth } from '../middlewares/basic-auth';
import { credentialsAreValid } from '../utils/utils';

export default (app: Application) => {
  app.use(cors());

  app.use(bodyParser.json());

  app.use(basicAuth(credentialsAreValid))

  // Load API routes
  app.use(config.api.prefix, routes());
};
