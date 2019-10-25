import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Bd} from '../../bd.service'
import { from, Observable, interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as firebase from 'firebase'
import { Progresso } from 'src/app/progresso.service';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string;
  public imagem: any;
  public progressoPubicacao: string = 'pendente';
  public porcentagemUpload: number;
  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null),
  })
  constructor(private bd: Bd, private progresso: Progresso) { }

  ngOnInit() {
      firebase.auth().onAuthStateChanged((user)=> {
       this.email = user.email;
      });
  }

  public publicar(): void{
    this.bd.publicar({email: this.email, titulo: this.formulario.value.titulo, imagem: this.imagem[0]});
    let acompanhamento = interval(1500);
    let continua = new Subject();
    continua.next(true);

    acompanhamento
    .pipe(takeUntil(continua))
    .subscribe(() => {
      console.log(this.progresso.status);
      console.log(this.progresso.estado);
      this.progressoPubicacao = 'andamento'; 
      if (this.progresso.estado) {
        this.porcentagemUpload = Math.round((this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes) * 100);
      }
      if(this.progresso.status == 'concluido')
      {
          this.progressoPubicacao = 'concluido'
          continua.next(false);
      }
    });
  }

  public preparaImagemUpload(event: Event): void{
    this.imagem = (<HTMLInputElement>event.target).files;
  }
}
