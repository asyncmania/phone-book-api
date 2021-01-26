import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from '../loaders/db'


export interface IUser {
  firstName: string;
  lastName: string;
  password: string;
  email: string
}

export default class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public password!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
   lastName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true
    }
  },
  {
    tableName: "users",
    sequelize, 
  }
)