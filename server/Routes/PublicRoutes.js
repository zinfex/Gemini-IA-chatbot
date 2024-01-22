import express from "express";
import UsuariosController from "../Controllers/UsuariosController.js";
import AuthController from "../Controllers/AuthController.js";

const PublicRoutes = express.Router();

PublicRoutes.get("/", (req, res) => {
  res.send("Servidor [Gemini IA]");
});

const authController = new AuthController();
PublicRoutes.post("/usuarios/login", authController.VerifyLogin);

const usuariosController = new UsuariosController();
PublicRoutes.post("/usuarios", usuariosController.create);

export default PublicRoutes;