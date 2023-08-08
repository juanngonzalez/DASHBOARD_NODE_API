import { Router } from "express";
import UserController from "../../controllers/UserController.js";
const userRoutes = Router();

const userController = new UserController();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/", userController.createUser);
userRoutes.put("/:id", userController.updateUserById);
userRoutes.delete("/:id", userController.deleteUserById);

export default userRoutes;
