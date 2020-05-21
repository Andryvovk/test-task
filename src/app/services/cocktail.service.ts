import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, StrCategory } from '../interfaces/category-interface';
import {environment} from '../../environments/environment';
import { CocktailList } from '../interfaces/cocktail-interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }
  
  getCocktailCategories(): Observable<Category> {
      return this.http.get<Category>(`${environment.API_URL}list.php?c=list`)
  }
  
  getCoctails(category: StrCategory[], categoryIndex: number): Observable<CocktailList> {
       return this.http.get<CocktailList>(`${environment.API_URL}filter.php?c=${category[categoryIndex].strCategory}`);
  }
}