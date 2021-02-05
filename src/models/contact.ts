import { Sequelize, Model, DataTypes, Association } from "sequelize";
import sequelize from "../loaders/db";
import Phone, { IPhone } from "./phone";

export interface IContact {
  id?: number
  name: string;
  address: string;
  email: string;
  phones?: IPhone[];
}

class Contact extends Model {
  public id!: number;
  public name!: string;
  public address!: string;
  public email!: string;
}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    }
  },
  {
    tableName: "contacts",
    sequelize,
  }
);

Phone.belongsTo(Contact);

Contact.hasMany(Phone, {
  foreignKey: "contactId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  as: "phones",
});

export default Contact;
