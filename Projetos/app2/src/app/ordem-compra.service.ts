import {Pedido} from './shared/pedido.model'
import {Injectable} from '@angular/core'
import {HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'
import {URL_API} from './app.api'

@Injectable()
export class OrdemCompraService{
constructor(private http: HttpClient){}

    public efetivarCompra(pedido: Pedido): Observable<any>{
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });       
        return this.http.post(
            `${URL_API}/pedidos`,
             JSON.stringify(pedido),
             {headers: headers}
        )
    }
}