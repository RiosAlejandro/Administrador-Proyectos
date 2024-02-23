import express from "express";
import dotenv from "dotenv";
import conectarBD from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

conectarBD();

//routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareaRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Servidor funcionando en puerto ${port}`);
});
