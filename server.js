<<<<<<< HEAD
import "dotenv/config";
import app from "./scr/app.js";


const port = process.env.PORT || 3000;


app.listen(port, () =>{
  console.log(`Servidor funcionando em: http://localhost:${port}`);
=======
import "dotenv/config";
import app from "./scr/app.js";


const port = process.env.PORT || 3000;


app.listen(port, () =>{
  console.log(`Servidor funcionando em: http://localhost:${port}`);
>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
});