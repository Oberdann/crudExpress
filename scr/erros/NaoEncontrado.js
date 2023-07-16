<<<<<<< HEAD
import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase {
  constructor(mensagem = "Página não encontrada") {
    super(mensagem, 404);
  }
}

=======
import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase {
  constructor(mensagem = "Página não encontrada") {
    super(mensagem, 404);
  }
}

>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default NaoEncontrado;