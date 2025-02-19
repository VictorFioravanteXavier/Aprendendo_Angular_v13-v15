import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter

  private _list: Array<string> = [
    "X Bacun",
    "Feijão",
    "Ovo"
  ]

  private httOptions = {
    headers: new HttpHeaders({
      "Content-Type": 'aplication/json',  
    })
  }

  constructor( private http: HttpClient ) { }

  /* public foodList () {
    return this._list;
  } */

  private url: string = "http://localhost:3000/"
  public foodList (): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
        res => res,
        err => err
      );
  }

  /* public foodListAdd(value: string){
    this.foodListAlert(value)
    return this._list.push(value)
  } */

  public foodListAdd(value: string): Observable<FoodList>{
    return this.http.post<FoodList>(`${this.url}list-food`, {nome: value}).pipe(
      res => res,
      err => err
    )
  }

  public foodListAlert(value: FoodList){
    return this.emitEvent.emit(value)
  }

  public foodListEdit(id: number, value: string): Observable<FoodList>{
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, {nome: value}).pipe(
      res => res,
      err => err
    )
  }

  public foodListDelete(id: number): Observable<FoodList>{
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
      err => err
    )
  }
}
