const router = require('express').Router();

const res = require('express/lib/response'); 

const UsuariosRouter = require('./views/UsuariosRouter'); 
const RecetasRouter = require('./views/RecetasRouter');
const GuardadosRouter = require('./views/GuardadosRouter');

router.use('/usuarios', UsuariosRouter); 
router.use('/recetas', RecetasRouter); 
router.use('/guardados', GuardadosRouter); 

module.exports = router;