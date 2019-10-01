"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroPortas) {
        this.valocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroPortas;
    }
    Carro.prototype.acelerar = function () {
        this.valocidade = this.valocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.valocidade = 0;
    };
    Carro.prototype.valocidadeAtual = function () {
        return 10;
    };
    return Carro;
}());
var carroA = new Carro("veloster", 3);
console.log(carroA);
carroA.acelerar();
carroA.acelerar();
console.log(carroA);
