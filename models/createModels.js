import UserDTO from "./UserDTO.js";
import LoginDTO from "./LoginDTO.js";
import RoleDTO from "./RoleDTO.js";
RoleDTO.hasMany(UserDTO, {
    foreignKey: "roleId",
  });
  UserDTO.belongsTo(RoleDTO, {
    foreignKey: "roleId",
    as: "role",
  });
  
export {  UserDTO,  LoginDTO, RoleDTO };
