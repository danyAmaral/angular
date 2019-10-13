import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Subject, empty, from } from 'rxjs';
import { switchMap, distinctUntilChanged, retry } from 'rxjs/operators';
import { fromEvent , of} from 'rxjs';
import { debounceTime, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .pipe(
        retry(10),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((pesquisa: string) => {
          console.log('api: ', pesquisa)
          if(pesquisa.trim() === '' )
              return  of<Oferta[]>([])
          return this.ofertasService.pesquisaOfertas(pesquisa)
        }
        ),
        catchError(err => {
          throw 'error in source. Details: ' + err;
        }),
      );
  }

  public limpaPesquisa(): void{
    this.subjectPesquisa.next('');
  }


  public pesquisa(pesquisa: string): void {
    console.log('keyup: ', pesquisa)
    this.subjectPesquisa.next(pesquisa)

  }

}
