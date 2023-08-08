import { DataTypes as DT, Model } from "sequelize";
import connectionDB from "../connectionDB/connectionDB.js";

class LoginDTO extends Model {}

LoginDTO.init(
  {
    Contraseña: {
      type: DT.STRING(50),
      allowNull: false,
    },
    Mail: {
      type: DT.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize: connectionDB,
    modelName: "Login",
    timestamps: false,
  },
 
);

export default LoginDTO;
