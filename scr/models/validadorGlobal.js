<<<<<<< HEAD
import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor !== "",
  message: ({ path }) => `O campo ${path} foi fornecido em branco.`
=======
import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor !== "",
  message: ({ path }) => `O campo ${path} foi fornecido em branco.`
>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
});