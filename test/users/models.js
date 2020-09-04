'use strict';
var utils = require('../utils');
var should = require('should');
var User = require('../../models/users.model');

 //Cambiar ruta y nombre de modelo 
 describe('Usuarios: modelos', function () {
        describe('#create()', function () {
                 it('agregar Usuario', function (done) {
                     var u = { 
                    //Cambiar a propiedades de Usuario    
                    name:'Juan',
                    apellido: 'Cito', 
                    edad:'20',
                    pais:'uruguay',
                    celular:'092994050',
                    cedula:'55555555',
                    email:'luis.guariglia@gmail.com',
                    sexo:'hombre',
                    };
                    User.create(u, function (err, createdUser) {
                        should.not.exist(err);    
                        createdUser.name.should.equal('Juan');
                        createdUser.apellido.should.equal('Cito');
                        createdUser.edad.should.equal(20);
                        createdUser.pais.should.equal('uruguay');
                        createdUser.celular.should.equal('092994050');
                        createdUser.cedula.should.equal(55555555);
                        createdUser.email.should.equal('luis.guariglia@gmail.com');
                        createdUser.sexo.should.equal('hombre');
                        done();       
                    });     
        });   
    }); 
});