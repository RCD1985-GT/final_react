const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth"); // DICE QUE auth utilice el middleware auth
const isAdmin = require("../middlewares/isAdmin");// DICE QUE isAdmin utilice el middleware isAdmin

const UsuarioController = require('../controllers/UsuarioController'); // 


//Leer todos los usuarios  FUNCIONA 
router.get('/', auth, UsuarioController.traeUsuarios); // MIRAR AUTH
//http://localhost:3300/usuarios

//Registrar un usuario...FUNCIONA 
router.post('/registro', UsuarioController.registraUsuario); // MIRAR AUTH
//http://localhost:3300/usuarios/registro

//Actualiza un perfil
router.put('/actualizar', UsuarioController.actualizaPerfil); // MIRAR AUTH
//http://localhost:3300/usuarios/actualizar

//Borrar usuarios
router.delete('/borrar', auth, UsuarioController.borraUsuarios); // MIRAR AUTH
//http://localhost:3300/usuarios/borrar

//Borrar usuarios por id
router.delete('/:id', auth, UsuarioController.borraUsuarioPorId); // MIRAR AUTH
//http://localhost:3300/usuarios/id

//Login...FUNCIONA 
router.post('/login', UsuarioController.loginUsuario); // MIRAR AUTH
//https://localhost:3300/usuarios/login


module.exports = router;