import  RoleDTO  from "../../models/RoleDTO.js";

const roleSeed = async () => {
  try {
    const adminRole = await RoleDTO.findOne({ where: { roleName: "admin" } });
    if (!adminRole) {
      await RoleDTO.create({ roleName: "admin" });

      
    }

    const userRole = await RoleDTO.findOne({ where: { roleName: "user" } });
    if (!userRole) {
      await RoleDTO.create({ roleName: "user" });
    }

    console.log("Roles creados con éxito");
  } catch (error) {
    console.log(error.message);
  }
};



export default roleSeed;