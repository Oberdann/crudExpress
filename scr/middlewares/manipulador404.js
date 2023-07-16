<<<<<<< HEAD
import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipulador404(req, res, next) {
  const erro404 = new NaoEncontrado();
  next(erro404);
}

=======
import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipulador404(req, res, next) {
  const erro404 = new NaoEncontrado();
  next(erro404);
}

>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default manipulador404;