'use strict';
var should = require('should');
describe('suma', function () {
    it('debe sumar 1+1 correctamente',function (done){
        var unoMasUno = 1 + 1; unoMasUno.should.equal(2);
        // debemoos llamar a done() para que mocha sepaque terminamos. 
        done();
    });
});