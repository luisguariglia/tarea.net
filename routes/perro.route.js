const express = require('express');
const router = express.Router();

const perroController = require('../controllers/perro.controller');


router.get('/list', perroController.dogList);
router.get('/new', perroController.perro_new);
router.post('/create', perroController.perro_create);
// router.get('/:id', perroController.perro_details);


module.exports = router;
