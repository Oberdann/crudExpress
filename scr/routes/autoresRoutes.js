<<<<<<< HEAD
import express  from "express";
import AutorController from "../controllers/autoresController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router 
  .get("/autores", AutorController.listarAutores, paginar)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.excluirAutor);


=======
import express  from "express";
import AutorController from "../controllers/autoresController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router 
  .get("/autores", AutorController.listarAutores, paginar)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.excluirAutor);


>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default router;