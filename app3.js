"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var carroA = new Carro_1["default"]('BMW', 3);
var moto = new Moto_1["default"]();
moto.acelerar();
console.log(carroA);
console.log(moto);
