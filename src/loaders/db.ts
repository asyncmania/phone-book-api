import { Sequelize } from "sequelize";
import dbConfig from "./db.config.js";

const nodeEnv: string = process.env.NODE_ENV;

const sequelize: Sequelize =
  process.env.NODE_ENV === "developement"
    ? new Sequelize(dbConfig["developement"])
    : new Sequelize(dbConfig["test"]);

export default sequelize;
