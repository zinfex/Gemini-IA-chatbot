import express from "express"
import UsuariosController from "../Controllers/UsuariosController.js"
import AuthController from "../Controllers/AuthController.js"

const UsuariosRoutes = express.Router()

const usuariosController = new UsuariosController()
UsuariosRoutes.get("/usuarios", usuariosController.findAll)
UsuariosRoutes.get("/usuarios/:id", usuariosController.findOne)
UsuariosRoutes.post("/usuarios", usuariosController.create)
UsuariosRoutes.delete("/usuarios/:id", usuariosController.delete)

const authController = new AuthController()
UsuariosRoutes.post('/usuarios/login', authController.VerifyLogin)

export default UsuariosRoutes