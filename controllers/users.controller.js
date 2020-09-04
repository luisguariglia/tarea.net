var mongoose = require("mongoose");
const User = require("../models/users.model");
const { listUsers } = require("../service/user.service");

exports.test = function (req, res) {
  res.send("Hola usuario");
};

exports.user_new = function (req, res) {
  res.render("new.ejs", { root: "." });
};

exports.user_create = function (req, res) {
  console.log(req.body);

  var user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    apellido: req.body.apellido,
    edad: req.body.edad,
    pais: req.body.pais,
    celular: req.body.celular,
    cedula: req.body.cedula,
    email: req.body.email,
    nombrecompleto: req.body.nombrecompleto,
    iniciales: req.body.iniciales,
    sexo: req.body.sexo,
  });

  user.save(function (err) {
    if (err) {
      //return next(err);
      console.log(err);
      res.send("Error");
    }
    //res.render('User Created successfully');
    res.render("respuesta.ejs", { user: user });
  });
  //})
};

exports.user_details = function (req, res) {
  console.log(req.params);
  User.findById(req.params.id, function (err, prod) {
    if (err) {
      console.log(err);
      res.send("Error");
    }
    res.send(prod);
  });
};

exports.user_list = (req, res, next) => {
  listUsers()
    .then((users) => {
      res.render("ListaUsuarios.ejs", { users });
    })
    .catch((err) => {
      res.render("error.ejs", { err });
    });
};

