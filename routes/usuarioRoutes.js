import express from "express";
import { registrar, 
         autenticar, 
         confirmar, 
         olvidePassword, 
         comprobarToken, 
         nuevoPassword, 
         perfil } from "../controllers/usuarioController.js";
import checkAuth from "../middlewares/checkAuth.js";

const router = express.Router();

//autentificacion, registro y confirmacion de usuarios
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);

router.get("/perfil", checkAuth, perfil);

export default router;
