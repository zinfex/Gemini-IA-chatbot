import express from "express";
import cors from "cors";
import gemini from "./Gemini.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor node: [Gemini IA]");
});

app.post("/gemini", async (req, res) => {
  const pergunta = await req.body.texto;
  const resposta = await gemini(pergunta);
  res.json({resposta: resposta});
});

app.listen(3001, () => {
  console.log("rodando servidor");
});
