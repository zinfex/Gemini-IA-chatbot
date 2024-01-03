import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import UsuariosModel from "../Models/UsuariosModel.js";
import express from "express";

dotenv.config();

class AuthController {
  async VerifyLogin(req, res) {
    try {
      const SECRET = process.env.SECRET;
      const model = new UsuariosModel();
      const data = await model.findLogin(req.body.email, req.body.senha);

      if (data[0] !== undefined) {
        const usuario = data[0];
        const dataUsuario = {
          id: usuario.id,
          email: usuario.email,
        };

        const token = jwt.sign(dataUsuario, SECRET, { expiresIn: 60 * 60 });

        res.status(200).json({
          message: "Login realizado com sucesso",
          data: { token },
        });
      } else {
        res.status(401).json({
          message: "Login ou senha inválido",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: e.message,
      });
    }
  }
}

export default AuthController;
