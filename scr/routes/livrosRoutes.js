<<<<<<< HEAD
import  express  from "express";
import LivroController from "../controllers/livrosController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros, paginar)
  .get("/livros/buscar", LivroController.listarLivroPorFiltro, paginar)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro);


=======
import  express  from "express";
import LivroController from "../controllers/livrosController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros, paginar)
  .get("/livros/buscar", LivroController.listarLivroPorFiltro, paginar)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro);


>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default router;