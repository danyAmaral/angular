import { Component, OnInit } from '@angular/core';
import { OfertasService} from '../ofertas.service';
import {Oferta} from '../shared/oferta.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
  }

  public pesquisa(pesquisa: string): void{
      this.ofertas = this.ofertasService.pesquisaOfertas(pesquisa);
      this.ofertas.subscribe(
        (ofertas: Oferta[]) => console.log(ofertas))

  }

}
