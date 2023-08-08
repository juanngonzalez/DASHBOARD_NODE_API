import { UserDTO } from "../models/createModels.js";

class LoginController {
  constructor() {}
  logIn = async (req, res, next) => {
    try {
      const { mail, contraseña } = req.body;
      const result = await UserDTO.findOne({
        where: { mail },
      });
  
      if (!result) {
        throw new Error("Credenciales incorrectas");
      }
  
      const compare = await result.validatePassword(contraseña, result.contraseña);
  
      if (!compare) {
        throw new Error("Credenciales incorrectas");
      }
  
      res.status(200).send({ success: true, message: "Usuario logueado con éxito" });
    } catch (error) {
      res.status(401).send({ success: false, message: error.message });
    }
  };
  
  logOut = async (req, res, next) => {
    try {} catch(err){}
  }
}

export default LoginController;