import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "O titulo do livro é obrigatório."]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores", required: [true, "O autor é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora fornecida {VALUE} não é um valor permitido."
      }
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas devem estar entre 10 e 5000. Valor fornecido {VALUE}."
      }
    }
  }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;