import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.API_URL}/`);
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.API_URL}/${id}`);
  }

}
