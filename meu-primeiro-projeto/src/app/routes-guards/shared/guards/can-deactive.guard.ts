import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Components
import { AccountComponent } from '../pages/account/account.component';

/* Ele é ativado quando o usuário sai da página dependendo da lógica pode retornar true ou false */

@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<AccountComponent> {
  canDeactivate(
    component: AccountComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(currentRoute)
    console.log(currentState);
    console.log(nextState);      
    return component.exit();
  }
  
}
