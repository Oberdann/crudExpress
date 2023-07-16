<<<<<<< HEAD
import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if(err instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(err).enviarResposta(res);
  } else if (err instanceof ErroBase) {
    err.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

=======
import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if(err instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(err).enviarResposta(res);
  } else if (err instanceof ErroBase) {
    err.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default manipuladorDeErros;