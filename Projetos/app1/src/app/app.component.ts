import { Component } from '@angular/core';

import { Resultado } from './shared/resultado.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public jogoEmAndamento: boolean = true;
    public tipoEncerramento: string; 
    public exibirResultado: Resultado;

    public encerrarJogo(resultado:Resultado): void{
      this.jogoEmAndamento = false;
      this.tipoEncerramento = resultado.tipo
      this.exibirResultado = new Resultado(resultado.tipo, resultado.conclusao)
      
    
      //onsole.log('percentualConclusao: ' , percentualConclusao)
    }

    public reiniciarJogo() : void{
      this.jogoEmAndamento = true
      this.tipoEncerramento = undefined
      this.exibirResultado = undefined
    }
}
