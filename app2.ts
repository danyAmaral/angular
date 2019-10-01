import Carro from './Carro' 
import{Pessoa} from './Pessoa' 
import{Concessionaria} from './Concessionaria' 

/*-- criar carros---*/

let carroA = new Carro("BMW",2)
let carroB = new Carro("Veloster",3)
let carroC = new Carro("Cerato",4)


/*---lista de carros--*/

let listaDeCaros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria("Av. Paulista", listaDeCaros);

//console.log(concessionaria.mostrarListaDeCarros())

/*-- comprar carro --*/

let cliente = new Pessoa("Dani", "BMW")

console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
})


console.log(cliente.dizerCarroQueTem())
