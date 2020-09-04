const express = require('express');
const bodyParser = require('body-parser');

// Importar las rutas de los productos
const users = require('./routes/users.route');
const perros = require('./routes/perro.route');

const app = express();


// Conexion a mongo
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://prueba:prueba@cluster0.ao1qh.mongodb.net/razas?retryWrites=true&w=majority';
var mongoDB = dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(express.static(__dirname + '/views'));

app.use('/users', users);
app.use('/dogs', perros);

//npm insall --save ejs
app.set('view engine', 'ejs')

let port = 1234;

app.listen(port, () => {
    console.log('Servidor arriba!');
});