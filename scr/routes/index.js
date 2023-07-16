<<<<<<< HEAD
import express  from "express";
import  livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) =>{
    res.status(200).send({titulo: "Curso de Node"});
  });


  app.use(
    express.json(),
    livros,
    autores
  );
};

=======
import express  from "express";
import  livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) =>{
    res.status(200).send({titulo: "Curso de Node"});
  });


  app.use(
    express.json(),
    livros,
    autores
  );
};

>>>>>>> ac49664c711c9058cbb6e4ee49186ab9145f624b
export default routes;