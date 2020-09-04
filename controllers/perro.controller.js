const mongoose = require("mongoose");
const Perro = require('../models/perro.model');
const { createDog, listDogs } = require('../service/perro.service');
const { getRazas } = require("../helpers")



exports.dogList = (req, res, next) => {
  
    listDogs()
         .then( dogs => {
             res.render('listaPerros.ejs', { dogs })
         })
         .catch(err => {
             res.render('error.ejs', { err })
         });
    
}

exports.perro_new = function (req, res) {
    return getRazas().then(data => {
        const razasData = data.message;
        const razas = Object.keys(razasData);
        return res.render('newPerro.ejs', { razas: razas });
    })
};

exports.perro_create = (req, res) => {
    const {nombre, raza, edad, userId = null} = req.body;
    createDog({ nombre, raza, edad, userId })
    .then((dog) => 
        res.json({
            ok: true,
            message: "Se ha creado el perro exitosamente"
        })
    .catch(err => {
        res.status(500).json({
            error: {
                message: "Ha habido algo mal!!!"
            }
        })
    }));

}

