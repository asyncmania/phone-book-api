import { Sequelize } from "sequelize";
import  dbConfig  from "./db.config.js";
const nodeEnv: string = process.env.NODE_ENV;

const sequelize: Sequelize = new Sequelize(dbConfig[nodeEnv]);

export default sequelize;
