<<<<<<< HEAD
import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String, 
      required: [true, "O nome do(a) autor(a) é obrigatório."]},
    nacionalidade: {type: String}
  },
  {
    versionKey: false
  }
);

const autores = mongoose.model("autores", autorSchema);

=======
import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String, 
      required: [true, "O nome do(a) autor(a) é obrigatório."]},
    nacionalidade: {type: String}
  },
  {
    versionKey: false
  }
);

const autores = mongoose.model("autores", autorSchema);

>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default autores;