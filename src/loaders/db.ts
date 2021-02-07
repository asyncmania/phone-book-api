import { Sequelize } from "sequelize";
import dbConfig from "./db.config.js";

const nodeEnv: string = process.env.NODE_ENV;

const sequelize: Sequelize = new Sequelize(
  dbConfig["test"].database,
  dbConfig["test"].username,
  dbConfig["test"].password,
  {
    host: dbConfig["test"].host,
    dialect: dbConfig["test"].dialect,
  }
);
 /*  process.env.NODE_ENV === "developement"
    ? new Sequelize(dbConfig["developement"])
    : new Sequelize(dbConfig["test"]); */



export default sequelize;
