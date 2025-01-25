import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Song extends Model {}

Song.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        songName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "songs",
        modelName: "Song",
        timestamps: true,
    }
);

export default Song;