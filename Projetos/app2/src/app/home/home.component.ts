import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Array<Oferta>
  constructor(private ofertasServices: OfertasService) { }

  ngOnInit() {
     this.ofertasServices.getOfertas()
        .then((ofertas: Oferta[]) =>{
            this.ofertas = ofertas;
        });
  }

}
