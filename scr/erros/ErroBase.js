<<<<<<< HEAD
class ErroBase extends Error {
  constructor(mensagem = "Erro interno do servidor", status = 500) {
    super();
    this.message = mensagem;
    this.status = status;
  }

  enviarResposta(res) {
    res.status(this.status).send({
      messagem: this.message,
      status: this.status
    });
  }
}

=======
class ErroBase extends Error {
  constructor(mensagem = "Erro interno do servidor", status = 500) {
    super();
    this.message = mensagem;
    this.status = status;
  }

  enviarResposta(res) {
    res.status(this.status).send({
      messagem: this.message,
      status: this.status
    });
  }
}

>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default ErroBase;