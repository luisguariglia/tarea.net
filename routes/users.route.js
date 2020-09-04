const express = require('express');
const router = express.Router();

// Require al controlador  ¿?¿?
const usersController = require('../controllers/users.controller');

router.get('/list', usersController.user_list);
router.get('/test', usersController.test);
router.get('/new', usersController.user_new);
router.post('/create', usersController.user_create);
router.get('/:id', usersController.user_details);
// router.get('/:id/perro', usersController.asignarPerro)



module.exports = router;
