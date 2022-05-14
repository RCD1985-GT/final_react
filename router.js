const router = require('express').Router();

const res = require('express/lib/response'); 

const UsuarioRouter = require('./views/UsuarioRouter'); 
const RecetasRouter = require('./views/RecetasRouter');
const GuardadosRouter = require('./views/GuardadosRouter');

router.use('/usuarios', UsuarioRouter); 
router.use('/recetas', RecetasRouter); 
router.use('/guardados', GuardadosRouter); 

module.exports = router;

// https://rcd-bbdd-proyecto-final.herokuapp.com/