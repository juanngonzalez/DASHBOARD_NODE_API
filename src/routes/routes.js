import { Router } from "express";
import login from "./login.js"
import user from "./user.js"
const routes= Router()

routes.use("/login", login)
routes.use("/user", user)

export default routes