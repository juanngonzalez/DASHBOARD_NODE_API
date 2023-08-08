import { UserDTO, RoleDTO } from "../models/createModels.js";

class UserController {
  constructor() {}
  getAllUsers = async (req, res, next) => {
    try {
      const result = await UserDTO.findAll({
        attributes: ["id", "mail"],
        include: [
          {
            model: RoleDTO,
            as: "role",
            attributes: ["roleName"],
          },
        ],
      });
      if (result.length === 0) throw new Error("No se encontraron usuarios");
      res.send({ success: true, message: "Usuarios encontrados", result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      debugger;
      console.log(id)
      const result = await UserDTO.findOne({
        where: {
          id: id,
        },
        attributes: ["id", "mail"],
      });
      if (!result) throw new Error("No se encontro el  usuario");
      res.send({ success: true, message: "Usuario encontrado", result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  createUser = async (req, res, next) => {
    try {
      const { contraseña, mail, role } = req.body;
      const result = await UserDTO.create({
        contraseña,
        mail,
        role,
      });
      if (!result.dataValues) throw new Error("No se pudo crear el usuario");
      res
        .status(200)
        .send({ success: true, message: "Usuario creado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  updateUserById = async (req, res, next) => {
    try {
      const { id } = req.params; // Corregir aquí, usar "id" en lugar de "userId"
      const { contraseña, mail, role } = req.body;
  
      const result = await UserDTO.update(
        { contraseña, mail, role },
        { where: { id: id } }
      );
      console.log(result)
      if (result[0] === 0) throw new Error("No se pudo actualizar el usuario");
  
      res.status(200).send({ success: true, message: "Usuario actualizado con éxito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  
  deleteUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const result = await UserDTO.destroy({ where: { id: id } });
      console.log(result)
      if (result === 0) throw new Error("No se pudo eliminar el usuario");
  
      res.status(200).send({ success: true, message: "Usuario eliminado con éxito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  


}

export default UserController;
