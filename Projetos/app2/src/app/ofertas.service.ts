import {Oferta} from './shared/oferta.model'
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {URL_API} from './app.api'
import {Observable} from 'rxjs';
import 'rxjs/operators'


@Injectable()
export class OfertasService{
constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]>{
        return  this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => {
                return resposta;
            })
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
                .toPromise()
                .then((resposta: any) => {
                    return resposta;
                })
    }

    public getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta[0]
            })
    }

    public getComoUsarOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta[0]
            })
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta[0]
            })
    }

    public pesquisaOfertas(pesquisa: string): Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${pesquisa}`);
    }
}