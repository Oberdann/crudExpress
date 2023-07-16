<<<<<<< HEAD
import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase {
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
    super(mensagem, 400);
  }
}

=======
import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase {
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
    super(mensagem, 400);
  }
}

>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default RequisicaoIncorreta;