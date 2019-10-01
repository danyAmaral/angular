export default class Veiculo {
    protected modelo: string;
    protected valocidade: number = 0

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