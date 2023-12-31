import express from "express";
import gemini from "../Gemini.js";

const PrivateRoutes = express.Router()

PrivateRoutes.post("/gemini", async (req, res) => {
    const pergunta = await req.body.texto;
    const resposta = await gemini(pergunta);
    res.json({resposta: resposta});
});

export default PrivateRoutes;