const mongoose = require("mongoose");
const Perro = require("../models/perro.model");
const User = require("../models/users.model");
const { getDogByName } = require("../helpers");

exports.listDogs = () => {
    return Perro.find()
         .lean()
         .exec();
};

exports.createDog = async ({ nombre, raza, edad, userId = null }) => {
    const imagen = await getDogByName(raza);
    
    const dog = await Perro.create({nombre, raza, edad, imagen});

    if(userId){
        const user = await User.findById(userId);
        user.children.push(dog);
        await user.save();
    }

    return dog.toJSON();
}