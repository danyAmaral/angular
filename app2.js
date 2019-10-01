"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
/*-- criar carros---*/
var carroA = new Carro_1["default"]("BMW", 2);
var carroB = new Carro_1["default"]("Veloster", 3);
var carroC = new Carro_1["default"]("Cerato", 4);
/*---lista de carros--*/
var listaDeCaros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria("Av. Paulista", listaDeCaros);
//console.log(concessionaria.mostrarListaDeCarros())
/*-- comprar carro --*/
var cliente = new Pessoa_1.Pessoa("Dani", "BMW");
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
