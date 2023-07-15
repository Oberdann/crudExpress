import NaoEncontrado from "../erros/NaoEncontrado.js";
import {autores} from "../models/index.js";

class AutorController {

  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = autores.find();
      req.resultado = autoresResultado;
      next();
    } catch (err) {
      next(err);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      let autoresResultado = await autores.findById(id);
      if (autoresResultado !== null) {
        res.status(200).send(autoresResultado);
      } else {
        next(new NaoEncontrado("Id do Autor não encontrado."));
      }
    } catch (err) {
      next(err);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);
      let autoresResultado = await autor.save();
      res.status(201).send(autoresResultado.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autoresResultado = await autores.findByIdAndUpdate(id, { $set: req.body });
      if(autoresResultado !== null) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Autor não localizado"));
      }
    } catch (err) {
      next(err);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autoresResultado = await autores.findByIdAndDelete(id);
      if(autoresResultado !== null) {
        res.status(200).send({ message: "Autor excluido com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Autor nao localizado"));
      }
    } catch (err) {
      next(err);
    }
  };
}


export default AutorController;
