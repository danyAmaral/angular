import { Component, OnInit, ViewChild } from '@angular/core';
import { Autenticacao } from '../autenticacao.service';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(PublicacoesComponent, {static: true}) public publicacoes: PublicacoesComponent;
  constructor(private autenticacao: Autenticacao) { }

  ngOnInit() {
  }
  public sair(): void {
    this.autenticacao.sair();
  }
  public atualizartimeline():void{
    this.publicacoes.atualizarTimeLine();
  }

}
