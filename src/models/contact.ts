import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from '../loaders/db'


type Phone = {
  phone: string;
  label: string
}


export interface IContact {
  
}

export default class Contact extends Model {
  public id!: number;
  public name!: string;
  public address!: string;
  public phones!: Phone[];
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
      unique: true
    },
    phones: {
        type: new DataTypes.VIRTUAL(DataTypes.ARRAY(DataTypes.JSON)),
        allowNull: false,
    }
  },
  {
    tableName: "contacts",
    sequelize, 
  }
)

