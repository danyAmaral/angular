import { Component, OnInit, EventEmitter , Output, OnDestroy} from '@angular/core';

import {Frase} from '../shared/frase.model'
import {Resultado} from '../shared/resultado.model'
import {FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada:number = 0
  public rodadaFrase: Frase

  public progresso: number = 0
  public tentativas: number = 3


  @Output() public encerrarJogo:EventEmitter<Resultado>  = new EventEmitter<Resultado>();

    constructor() {
      this.atualizaRodada()
    }

    ngOnInit() {

    }

    ngOnDestroy(){
    }

    public atualizaResposta(resposta:Event): void{
      this.resposta = (<HTMLInputElement>resposta.target).value;
    }

    public verificarResposta(): void{
      if(this.rodadaFrase.frasePtBr.toUpperCase() == this.resposta.toUpperCase())
      {
        this.rodada++
        this.progresso = this.progresso + (100/this.frases.length);
        this.atualizaRodada()
      }
      else{
       this.tentativas--

       if(this.tentativas === -1){
          let resultado: Resultado = new Resultado('derrota',this.progresso);
          this.encerrarJogo.emit(resultado);
       }
    }
  }

    public atualizaRodada():void{
      if(this.rodada < this.frases.length)
      {
        this.rodadaFrase = this.frases[this.rodada]
        this.resposta = ''
      }
      if(this.rodada === this.frases.length)
      {
        let resultado: Resultado = new Resultado('vitoria',this.progresso);
        this.encerrarJogo.emit(resultado);
      }
    }
}
