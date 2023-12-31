import express from "express";
import cors from "cors";
import PrivateRoutes from "./Routes/PrivateRoutes.js";
import PublicRoutes from "./Routes/PublicRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(PublicRoutes);
app.use(PrivateRoutes);

app.listen(3001, () => {
  console.log("rodando servidor");
});
