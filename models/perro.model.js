var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PerroSchema = new Schema({
  nombre: { type: String, required: true, max: 100 },
  raza: { type: String, required: true, max: 100 },
  edad: { type: Number, required: true, max: 25 },
  imagen: { type: String, max: 100 },
});

/*PerroSchema.virtual('nombreCompleto').get(function(){
    return this.name+ ' ' + this.apellido;
});
PerroSchema.virtual('iniciales').get(function(){
    return this.name.charAt(0).toUpperCase() + this.apellido.charAt(0).toUpperCase();
});*/
/*PerroSchema.virtual('mensaje').get(function(){
    var ret="";
    if(this.sexo.localeCompare("hombre")==0){
        ret="Bienvenido ";
    }else if(this.sexo.localeCompare("mujer")==0){
        ret="Bienvenida ";
    }else{
        ret="Bienvenide ";
    }
    return ret;
});*/

PerroSchema.set("toJSON", { getters: true, virtuals: true });

// Export the model
module.exports = mongoose.model("Perro", PerroSchema);
