import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class User extends Model {}

User.init(
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
        tableName: "users",
        modelName: "User",
        timestamps: true,
    }
);

export default User;