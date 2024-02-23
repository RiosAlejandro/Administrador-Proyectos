import express from "express";
import {
  obtenerProyectos,
  nuevoProyecto,
  obtenerProyecto,
  editarProyecto,
  eliminarProyecto,
  agregarColaborador,
  eliminarColaborador,
  obtenerTareas, } from "../controllers/proyectoController";
import checkAuth from "../middlewares/checkAuth.js";

const router = express.Router();

router.get("/", checkAuth, obtenerProyectos);
router.post("/", checkAuth, nuevoProyecto);

router.get("/:id", checkAuth, obtenerProyecto);
router.put("/:id", checkAuth, editarProyecto);
router.delete("/:id", checkAuth, eliminarProyecto);

router.get("/tareas/:id", checkAuth, obtenerTareas);
router.post("/tareas/:id", checkAuth, agregarColaborador);
router.post("/tareas/:id", checkAuth, eliminarColaborador);

export default router;
