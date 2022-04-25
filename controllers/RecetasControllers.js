const { default: axios } = require("axios");
const { Pelicula } = require('../models/index'); // CAMBIAR
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");


const RecetasController = {};

// Funcion registra receta..FUNCIONA
RecetasController.registraReceta = (req, res) => {
    let titulo = req.body.titulo;
    let tipo = req.body.tipo;
    let poster = req.param.poster; 
    let tiempo = req.param.tiempo; 
    let ingredientes = req.param.ingredientes; 
    let preparacion = req.param.ingredientes; 
    
    
   
    Pelicula.findAll({
        where: { titulo: titulo }
    }).then(recetaRepetida => {
        if (recetaRepetida == 0) {
            Receta.create({

                titulo: titulo,
                tipo: tipo,
                poster: poster,
                tiempo: tiempo,
                ingredientes: ingredientes,
                preparacion: preparacion,

                
            }).then(receta => {
                res.send(`${receta.titulo} ha sido registrada`)
            }).catch((error) => {
                res.send(error);
            });
        } else {
            res.send("La receta ya esta registrada")
        }
    }).catch(error => {
        res.send(error)
    });
}; 


//Funcion trae Recetas
RecetasController.traeRecetas = (req, res) => { 
    Receta.findAll().then((Recetas) => res.json(Recetas));
};

// //Funcion trae Peliculas por tipo...FUNCIONA
RecetasController.traeRecetasTipo = (req, res) => { 
    Receta.findAll({ where: {tipo : req.params.tipo}}).then((Recetas) => res.json(Recetas));
};




module.exports = PeliculasController;