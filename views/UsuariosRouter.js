const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth"); // DICE QUE auth utilice el middleware auth
const isAdmin = require("../middlewares/isAdmin");// DICE QUE isAdmin utilice el middleware isAdmin

const UsuariosController = require('../controllers/UsuariosController'); // 


//Leer todos los usuarios  FUNCIONA 
router.get('/', UsuariosController.traeUsuarios); 
//http://localhost:3300/usuarios

//Registrar un usuario...FUNCIONA 
router.post('/registro', UsuariosController.registraUsuario);
//http://localhost:3300/usuarios/registro

//Actualiza un perfil
router.put('/actualizar', auth, UsuariosController.actualizaPerfil); 
//http://localhost:3300/usuarios/actualizar

//Borrar usuarios
router.delete('/borrar', auth, UsuariosController.borraUsuarios);
//http://localhost:3300/usuarios/borrar

//Borrar usuarios por id
router.delete('/:id', auth, UsuariosController.borraUsuarioPorId); 
//http://localhost:3300/usuarios/id

//Login...FUNCIONA 
router.post('/login', UsuariosController.loginUsuario);
//https://localhost:3300/usuarios/login


module.exports = router;