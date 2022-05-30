
const { Guardado } = require('../models/index'); // ¿PORQUE LLAMA A MODELS/INDEX.JS? // CAMBIAR


const GuardadosController = {};


// Funcion nuevoGuardado.

GuardadosController.nuevoGuardado = (req,res) => {
    
    let body = req.body;

    console.log("este es body",body)

    Guardado.create({
        recetaId: body.recetaId,
        usuarioId: body.usuarioId,
        titulo: body.titulo,
        tipo: body.titulo,
        poster: body.poster,
        ingredientes: body.ingredientes,
        preparacion: body.preparacion
         })
    .then(guardado => {
        if(guardado){
            res.send(guardado)
        }else{
            res.send("No se ha guardado");
        }
    })
    .catch((error => {
        res.send(error)
    }))
}

// Funcion que muestra receta por id de usuario
GuardadosController.traeGuardados= (req, res) => {

    try {
        Guardado.findAll({
            where: {
                usuarioId: req.params.id
            }
        }).then(datos => {
            res.send(datos);
        }
        );
    } catch (error) {
        res.send(error);
    }
}

// Funcion totalGuardados....FUNCIONA
GuardadosController.totalGuardados = (req, res) => {
    Guardado.findAll()
    .then(data => {
        res.send(data)
    });
};

// Funcion elimina receta guardada
GuardadosController.eliminaRecetaId =(req,res) => {

    // let id = req.params.id;

    try{
        Receta.destroy({
            where : { id : req.params.id},
            truncate : false
        })
      
        .then(recetaEliminada =>{
            console.log(recetaEliminada);
            res.send(`La receta con id ${id} ha sido eliminada`);
        })
    }
    catch(error){
        send.error(error);
    }
};



module.exports = GuardadosController;