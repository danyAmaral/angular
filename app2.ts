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

let carroA = new Carro("veloster", 3);
console.log(carroA)
carroA.acelerar();
carroA.acelerar();
console.log(carroA)
