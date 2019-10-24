import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Autenticacao } from './autenticacao.service';

@Injectable()
export class AutenticacaoGuard implements CanActivate{

    constructor(private autenticacao: Autenticacao){}

    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        return this.autenticacao.autenticado();
    }

}