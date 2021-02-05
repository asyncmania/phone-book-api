import { Sequelize, Model, DataTypes, Association } from "sequelize";
import sequelize from "../loaders/db";
import Contact from "./contact";

export interface IPhone {
  type: string;
  number: string;
}

class Phone extends Model {
  public contactId!: number;
  public id!: number;
  public name!: string;

  public static associations: {
    contact: Association<Phone, Contact>
  };
}

Phone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    number: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "phones",
    sequelize,
  }
);

export default Phone;
