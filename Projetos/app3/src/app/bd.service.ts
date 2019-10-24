import * as firebase from 'firebase'
export class Bd{
    public publicar(publicao: any): void{
        firebase.database().ref(`publicacoes/${btoa(publicao.email)}`)
            .push({titulo: publicao.titulo});

    }
}