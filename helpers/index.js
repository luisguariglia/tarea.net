var Request = require("request");
const https = require('https');
const fetch = require("node-fetch");

function getDogByName(raza){
    const URL = `https://dog.ceo/api/breed/${raza}/images/random`;

    return fetch(URL, {method: 'GET'})
    .then(res => res.json())
    .then(data => data.message)
    .catch(err => "https://www.hola.com/imagenes/estar-bien/20191205155716/razas-de-perros-adiestrar/0-756-6/razas-de-perro-adiestrar-m.jpg")
}

function getRazas(){
    return new Promise(function(resolve, reject){
    
        Request.get("https://dog.ceo/api/breeds/list/all", (error, response, body) => {
        if(error) {
            return reject(error);
        }
        
        console.log('body:', body);

        console.log(JSON.parse(body));
        const data = JSON.parse(body);
        return resolve(data);
        });
    });
}

module.exports = {
    getDogByName,
    getRazas
}

//////
