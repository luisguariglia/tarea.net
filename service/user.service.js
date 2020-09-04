const mongoose = require("mongoose");
const User = require("../models/users.model");
//const { getDogByName } = require("../helpers");

exports.listUsers = () => {
    return User.find()
         .lean()
         .exec();
};

/*exports.createDog = async ({ nombre, raza, edad }) => {
    const imagen = getDogByName(nombre);
    
    const dog = await Perro.create({nombre, raza, edad, imagen}).toJSON();

    return dog;
}*/