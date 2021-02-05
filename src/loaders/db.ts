import { Sequelize } from "sequelize";
import dbConfig from "./db.config.js";

const nodeEnv: string = process.env.NODE_ENV;

const sequelize: Sequelize = new Sequelize(
  dbConfig[process.env.NODE_ENV].database,
  dbConfig[process.env.NODE_ENV].username,
  dbConfig[process.env.NODE_ENV].password,
  {
    host: dbConfig[process.env.NODE_ENV].host,
    dialect: dbConfig[process.env.NODE_ENV].dialect,
  }
);
 /*  process.env.NODE_ENV === "developement"
    ? new Sequelize(dbConfig["developement"])
    : new Sequelize(dbConfig["test"]); */



export default sequelize;
