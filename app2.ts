class Carro
{
    private modelo: string;
    private numeroDePortas: number;
    private valocidade: number = 0

    constructor(modelo:string, numeroPortas: number)
    {
        this.modelo = modelo;
        this.numeroDePortas = numeroPortas;
    }
    public acelerar() : void{
        this.valocidade = this.valocidade + 10;
    }
    public parar() : void{
        this.valocidade = 0;
    }
    public valocidadeAtual() : number {
        return 10;
    }
} 

class Concessionaria{
    private endereco: string;
    private listaDeCarros: Carro[];

    constructor(endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }
    public fornecerEndereco() : string{
        return this.endereco;
    }

    public mostrarListaDeCarros() : Carro[]{
        return this.listaDeCarros;
    }
}

class Pessoa{
    private nome: string;
    private carroPreferido: string;
    private carro: Carro;

    constructor(nome:string, carroPreferido:string){
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): string{
        return this.nome;
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido;
    }

    public comprarCarro(carro:Carro): void{
        this.carro = carro;
    }
    public dizerCarroQueTem(): Carro{
        return this.carro;
    }
}

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
