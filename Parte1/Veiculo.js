"use strict";
exports.__esModule = true;
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.valocidade = 0;
    }
    Veiculo.prototype.acelerar = function () {
        this.valocidade = this.valocidade + 10;
    };
    Veiculo.prototype.parar = function () {
        this.valocidade = 0;
    };
    Veiculo.prototype.valocidadeAtual = function () {
        return 10;
    };
    return Veiculo;
}());
exports["default"] = Veiculo;
