import bcrypt from "bcrypt";
import { DataTypes as DT, Model } from "sequelize";
import connectionDB from "../connectionDB/connectionDB.js";

class UserDTO extends Model {
  async validatePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}

UserDTO.init(
  {
    contraseña: {
      type: DT.STRING,
      allowNull: false,
    },
    salt: {
      type: DT.STRING,
    },
    mail: {
      type: DT.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    roleId: {
      type: DT.INTEGER,
      defaultValue: 2,
    },
  },
  {
    sequelize: connectionDB,
    modelName: "users",
    timestamps: false,
  }
);

UserDTO.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;

  const hash = await bcrypt.hash(user.contraseña, salt);
  user.contraseña = hash;
});

export default UserDTO;
