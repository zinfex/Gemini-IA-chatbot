import express from "express"
import UsuariosController from "../Controllers/UsuariosController.js"

const UsuariosRoutes = express.Router()
const usuariosController = new UsuariosController()
UsuariosRoutes.get("/usuarios", usuariosController.findAll)
UsuariosRoutes.get("/usuarios/:id", usuariosController.findOne)
UsuariosRoutes.post("/usuarios", usuariosController.create)
UsuariosRoutes.delete("/usuarios/:id", usuariosController.delete)

export default UsuariosRoutes