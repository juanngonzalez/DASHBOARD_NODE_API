import { Router } from "express";
import LoginController from "../controllers/LoginController.js"

const loginRoutes = Router();

const loginController= new LoginController()

loginRoutes.post("/", loginController.logIn);

export default loginRoutes;