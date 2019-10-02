import Veiculo from './Veiculo'

class Moto extends Veiculo {
    public acelerar() : void{
        this.valocidade = this.valocidade + 20;
    }
}

export default Moto
