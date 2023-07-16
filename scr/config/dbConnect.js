<<<<<<< HEAD
import mongoose from "mongoose";

mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

=======
import mongoose from "mongoose";

mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default db;