import * as firebase from 'firebase'
import { error } from 'protractor';
import { Injectable } from '@angular/core';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {
    constructor(private progresso: Progresso) { }

    public publicar(publicao: any): void {
        firebase.database().ref(`publicacoes/${btoa(publicao.email)}`)
            .push({ titulo: publicao.titulo })
            .then((resposta) => {
                let nomeImagem = resposta.key;
                firebase.storage()
                    .ref()
                    .child(`imagens/${nomeImagem}`)
                    .put(publicao.imagem)
                    .on(firebase.storage.TaskEvent.STATE_CHANGED,
                        (snapshot: any) => {
                            this.progresso.status = "andamento"
                            this.progresso.estado = snapshot;
                        },
                        (error) => {
                            this.progresso.status = "erro"
                        },
                        () => {
                            this.progresso.status = "concluido"

                        });
            });
    }

    public consultaPublicacoes(email: string): any{
        firebase.database().ref(`publicacoes/${btoa(email)}`)
        .once('value')
        .then((snapshot: any) => {
           let publicacoes = [];
            snapshot.forEach((childSnapshot: any) => {
                let publicacao = childSnapshot.val();
                firebase.storage().ref().child(`imagens/${childSnapshot.key}`)
                    .getDownloadURL()
                    .then((url:string) => { 
                        publicacao.url_imagem = url;
                        publicacoes.push(publicacao);
                    })
            });
            console.log(publicacoes);
        })
    }
}