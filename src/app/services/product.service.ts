import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as routes from '../routes';
import { Product } from '../models/product';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(routes.FETCH_PRODUCTS);
  }

  public subscribeToNewsLetter(user: User): Observable<any>{
    return this.http.post<User>(routes.POST_NEWSLETTER, user);
  }

}
