<<<<<<< HEAD
import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(err) {
    const mensagensErro = Object.values(err.errors)
      .map(err => err.message)
      .join("; ");
    
    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

=======
import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(err) {
    const mensagensErro = Object.values(err.errors)
      .map(err => err.message)
      .join("; ");
    
    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default ErroValidacao;