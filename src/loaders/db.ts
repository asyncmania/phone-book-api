import { Sequelize } from "sequelize";
import dbConfig from "./db.config.js";

const nodeEnv: string = process.env.NODE_ENV;

const sequelize: Sequelize = new Sequelize(
  dbConfig[nodeEnv].database,
  dbConfig[nodeEnv].username,
  dbConfig[nodeEnv].password,
  {
    host: dbConfig[nodeEnv].host,
    dialect: dbConfig[nodeEnv].dialect,
  }
);
 /*  process.env.NODE_ENV === "developement"
    ? new Sequelize(dbConfig["developement"])
    : new Sequelize(dbConfig["test"]); */



export default sequelize;
