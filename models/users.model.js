var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Perro = require("./perro.model");

var UserSchema = new Schema({
  //_id: mongoose.Schema.Types.ObjectId,
  children: [Perro.schema],
  name: { type: String, required: true, max: 100 },
  apellido: { type: String, required: true, max: 100 },
  edad: { type: Number, required: true, max: 100 },
  pais: { type: String, max: 100 },
  celular: { type: String },
  cedula: {
    type: Number,
    validate: [
      function (cedula) {
        return cedula < 99999999 && cedula > 9999999;
      },
      "La cedula debe tener 8 digitos",
    ],
  },
  email: { type: String, index: true, match: /.+\@.+\..+/ },
  sexo: { type: String, enum: ["hombre", "mujer", "otro"] },
});

UserSchema.virtual("nombreCompleto").get(function () {
  return this.name + " " + this.apellido;
});

UserSchema.virtual("iniciales").get(function () {
  return (
    this.name.charAt(0).toUpperCase() + this.apellido.charAt(0).toUpperCase()
  );
});

UserSchema.virtual("mensaje").get(function () {
  var ret = "";
  if (this.sexo.localeCompare("hombre") == 0) {
    ret = "Bienvenido ";
  } else if (this.sexo.localeCompare("mujer") == 0) {
    ret = "Bienvenida ";
  } else {
    ret = "Bienvenide ";
  }
  return ret;
});

UserSchema.set("toJSON", { getters: true, virtuals: true });

// Export the model
module.exports = mongoose.model("User", UserSchema);
