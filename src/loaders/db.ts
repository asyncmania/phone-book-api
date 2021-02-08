import { Sequelize } from "sequelize";
import dbConfig from "./db.config.js";
import { envFound } from "../config";

const sequelize: Sequelize = new Sequelize(dbConfig[envFound.parsed.NODE_ENV]);

export default sequelize;
