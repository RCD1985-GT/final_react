const { Usuario } = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');

const UsuarioController = {};

// Funcion traeUsuarios
UsuarioController.
    traeUsuarios = (req, res) => {

        Usuario.findAll()
            .then(data => {
                res.send(data)
            });

    };

// Funcion registraUsuario...FUNCIONA
UsuarioController.registraUsuario = async (req, res) => {

    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    //Guardamos en sequelize el usuario
    Usuario.findAll({
        where: { email: email }
    }).then(datosRepetidos => {
        if (datosRepetidos == 0) {

            Usuario.create({
                nombre: nombre,
                apellido: apellido,
                email: email,
                password: password,
            }).then(usuario => {
                res.send(`${usuario.nombre}, bienveni@ a final`);
            })
                .catch((error) => {
                    res.send(error);
                });

        } else {
            res.send("El usuario con ese e-mail ya existe en nuestra base de datos");
        }
    }).catch(error => {
        res.send(error)
    });
};


// Funcion actualizaPerfil
UsuarioController.actualizaPerfil = async (req, res) => {

    let datos = req.body;

    let id = req.params.id;

    try {

        Usuario.update(datos, {
            where: { id: id }
        })
            .then(actualizado => {
                res.send(actualizado);
            });

    } catch (error) {
        res.send(error);
    }

};

// Funcion borraUsuarios
UsuarioController.borraUsuarios = async (req, res) => {

    try {

        Usuario.destroy({
            where: {},
            truncate: false
        })
            .then(usuariosEliminados => {
                res.send(`Se han eliminado ${usuariosEliminados} usuarios`);
            })

    } catch (error) {
        res.send(error);
    }

};

// Funcion borraUsuarioPorId
UsuarioController.borraUsuarioPorId = async (req, res) => {

    let id = req.params.id;

    try {

        Usuario.destroy({
            where: { id: id },
            truncate: false
        })
            .then(usuarioEliminado => {
                console.log(usuarioEliminado);
                res.send(`El usuario con la id ${id} ha sido eliminado`);
            })

    } catch (error) {
        res.send(error);
    }

};

// Funcion loginUsuario....FUNCIONA
UsuarioController.loginUsuario = (req, res) => {

    let correo = req.body.email;
    let password = req.body.password;

    Usuario.findOne({
        where: { email: correo }
    }).then(Usuario => {
        if (!Usuario) {
            res.send("Usuario o contraseña inválido");
        } else {
            //el usuario existe, por lo tanto, vamos a comprobar
            //si el password es correcto

            if (bcrypt.compareSync(password, Usuario.password)) { //COMPARA CONTRASEÑA INTRODUCIDA CON CONTRASEÑA GUARDADA, TRAS DESENCRIPTAR

                console.log(Usuario.password);

                let token = jwt.sign({ usuario: Usuario }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                res.json({
                    usuario: Usuario,
                    token: token
                })
            } else {
                res.status(401).json({ msg: "Usuario o contraseña inválidos" });
            }
        };


    }).catch(error => {
        res.send(error);
    })
};

module.exports = UsuarioController;