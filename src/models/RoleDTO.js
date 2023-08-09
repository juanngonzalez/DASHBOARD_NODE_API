import { DataTypes as DT } from "sequelize";
import connectionDB from "../connectionDB/connectionDB.js";

const RoleDTO = connectionDB.define(
  "Role",
  {
    roleName: {
      type: DT.STRING,
      defaultValue: "user",
    },
  },
  {
    modelName: "roles",
    timestamps: false,
  }
);

export default RoleDTO;
