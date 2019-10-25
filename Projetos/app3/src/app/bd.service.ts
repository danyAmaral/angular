import * as firebase from 'firebase'
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

    public consultaPublicacoes(email: string): Promise<any> {

        return new Promise((resolve, reject) => {
            firebase.database().ref(`publicacoes/${btoa(email)}`)
                .orderByKey()
                .once('value')
                .then((snapshot: any) => {
                    let publicacoes = [];
                    snapshot.forEach((childSnapshot: any) => {
                        let publicacao = childSnapshot.val();
                        publicacao.key = childSnapshot.key;
                        publicacoes.push(childSnapshot)
                    })
                    return publicacoes.reverse();
                }).then((publicacoes: any) => {
                    publicacoes.forEach(publicacao => {
                        firebase.storage().ref().child(`imagens/${publicacao.key}`)
                            .getDownloadURL()
                            .then((url: string) => {
                                publicacao.url_imagem = url;

                                firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
                                    .once('value')
                                    .then((snapshot: any) => {
                                        publicacao.nome_usuario = snapshot.val().nome_usuario;
                                       // publicacoes.push(publicacao);
                                    })
                            })
                    });
                    resolve(publicacoes);
                })
        });
    }
}