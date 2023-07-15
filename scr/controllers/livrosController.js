// import ErroBase from "../erros/ErroBase.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores, livros } from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const buscaLivros = livros.find();
      req.resultado = buscaLivros;
      next();
    } catch (err) {
      next(err);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livrosResultado = await livros.findById(id)
        .populate("autor", "nome")
        .exec();
      if (livrosResultado !== null) {
        res.status(200).send(livrosResultado);
      } else {
        next(new NaoEncontrado("Id do Livro não localizado"));
      }
    } catch (err) {
      next(err);
    }
  };
  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send({ message: "O livro foi cadastrado com sucesso" });
    } catch (err) {
      next(err);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livrosResultado = await livros.findByIdAndUpdate(id, { $set: req.body });
      if (livrosResultado !== null) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do livro não encontrado"));
      }
    } catch (err) {
      next(err);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      let id = req.params.id;
      const livrosResultado = await livros.findByIdAndDelete(id);
      if (livrosResultado !== null) {
        res.status(200).send({ message: "O livro foi deletado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do livro não enccontrado"));
      }
    } catch (err) {
      next(err);
    }
  };


  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);
      if (busca !== null) {
        let livrosResultado = livros
          .find(busca)
          .populate("autor");
        req.resultado = livrosResultado;
        next();
      } else {
        next(new NaoEncontrado("O livro com especificado não foi encontrado"));
      }
    } catch (err) {
      next(err);
    }
  };
}

async function processaBusca(p) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = p;
  let busca = {};
  let regexEditora = new RegExp(editora, "i");
  let regexTitulo = new RegExp(titulo, "i");

  if (editora) busca.editora = regexEditora;
  if (titulo) busca.titulo = regexTitulo;

  if (minPaginas || maxPaginas) busca.numeroPaginas = {};
  if (maxPaginas) busca.numeroPaginas.$lte = maxPaginas;
  if (minPaginas) busca.numeroPaginas.$gte = minPaginas;
  // gte = maior ou igual que
  // lte = menor ou igual que

  if (nomeAutor) {
    const autor = await autores.findOne({ nome: nomeAutor });

    if (autor !== null) {
      busca.autor = autor._id;
    } else {
      busca = null;
    }
  }


  return busca;
}



export default LivroController;