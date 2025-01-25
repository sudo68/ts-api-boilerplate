import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class ExampleModel extends Model {}

ExampleModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "examplemodel",
        modelName: "ExampleModel",
        timestamps: true,
    }
);

export default ExampleModel;