import { Component, OnInit } from '@angular/core';
import { Bd } from 'src/app/bd.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  constructor(private bd: Bd) { }
  public email: string;
  public publicacoes: string;
  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
      this.atualizarTimeLine();
    });
  }
  public atualizarTimeLine(): void{
    this.bd.consultaPublicacoes(this.email)
      .then((publicacoes) => {
        this.publicacoes = publicacoes;
      });
  }

}
