const express = require('express');
const {check} = require('express-validator'); // check es un metodo del validator.
const router = express.Router();
const controladorUsuarios = require('../controladores/controlador-usuarios');

// Consulta a los usuarios.
router.get('/', controladorUsuarios.recuperarUsuarios);
// Consulta a los usuarios por ID.
router.get('/:uid', controladorUsuarios.recuperarUsuariosPorId);
// Consulta a los usuarios por nombre.
router.get('/nombre/:unombre', controladorUsuarios.recuperarUsuariosPorNombre);
// Consulta a los usuarios por email.
router.get('/email/:uemail', controladorUsuarios.recuperarUsuarioPorEmail);
// Eliminar usuario por ID.
router.delete('/:uid', controladorUsuarios.eliminarUsuarioPorId);
// Eliminar usuario por email.
router.delete('/delemail/:uemail', controladorUsuarios.eliminarUsuarioPorEmail);
// Crear nuevo avión.
router.post('/', controladorUsuarios.crearUsuario);
// Modificar avión.
router.patch('/:uid', controladorUsuarios.modificarUsuario);
// Login Usuario.
router.post('/login', controladorUsuarios.loginUsuario);

module.exports = router;