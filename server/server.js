import express from "express";
import cors from "cors";
import PrivateRoutes from "./Routes/PrivateRoutes.js";
import PublicRoutes from "./Routes/PublicRoutes.js"
import UsuariosRoutes from "./Routes/UsuariosRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(PublicRoutes)
app.use(PrivateRoutes)
app.use(UsuariosRoutes)

app.listen(3001, () => {
  console.log("rodando servidor");
});