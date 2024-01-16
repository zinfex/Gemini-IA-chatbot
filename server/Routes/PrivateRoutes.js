import express from "express";
import gemini from "../Gemini.js";
import UsuariosRoutes from "./UsuariosRoutes.js";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const PrivateRoutes = express.Router();

PrivateRoutes.use((req, res, next) => {
  const SECRET = process.env.SECRET;
  const token = req.headers.token;
  let logged = false;

  if (token) {
    try {
      const tokenValido = jwt.verify(token, SECRET);

      if (tokenValido) {
        logged = true;
      }
    } catch (error) {
      return res.json(error);
    }
    if (logged == false) {
      return res.json({ message: "Token inválido" });
    }
    next();
  } else {
    res.status(500).json({
      statusCode: 500,
      message: "Insira o token",
    });
  }
});

PrivateRoutes.post("/gemini", async (req, res) => {
  try {
    const pergunta = await req.body.texto;
    const resposta = await gemini(pergunta);
    res.json({ resposta: resposta });
  } catch(e) {
    res.json({ resposta: "Erro, não foi possível encontrar uma resposta."})
  }
}); 

PrivateRoutes.use(UsuariosRoutes);

export default PrivateRoutes;
