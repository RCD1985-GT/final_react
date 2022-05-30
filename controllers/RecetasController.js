const { default: axios } = require("axios");
const { Receta } = require('../models/index');
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");


const RecetasController = {};

// Funcion registra receta
RecetasController.registraReceta = (req, res) => {

    let id = req.params.id;
    let usuarioId = req.body.usuarioId;
    let titulo = req.body.titulo;
    let tipo = req.body.tipo;
    let poster = req.body.poster;
    let ingredientes = req.body.ingredientes;
    let preparacion = req.body.preparacion;

    //Guardamos en sequelize la receta
    Receta.findAll({
        where: { titulo: titulo }
    }).then(recetaRepetida => {
        if (recetaRepetida == 0) {

            Receta.create({
                usuarioId: usuarioId,
                titulo: titulo,
                tipo: tipo,
                poster: poster,
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
    Receta.findAll().then((Recetas) => res.json(Recetas)).catch(error => {
        res.send(error)
    });
};

//Funcion trae Recetas por tipo
RecetasController.traeRecetasTipo = (req, res) => {
    Receta.findAll({ where: { tipo: req.params.tipo } }).then((Recetas) => res.json(Recetas)).catch(error => {
        res.send(error)
    });
};

module.exports = RecetasController;