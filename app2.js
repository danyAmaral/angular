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
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/*-- criar carros---*/
var carroA = new Carro("BMW", 2);
var carroB = new Carro("Veloster", 3);
var carroC = new Carro("Cerato", 4);
/*---lista de carros--*/
var listaDeCaros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria("Av. Paulista", listaDeCaros);
//console.log(concessionaria.mostrarListaDeCarros())
/*-- comprar carro --*/
var cliente = new Pessoa("Dani", "BMW");
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
