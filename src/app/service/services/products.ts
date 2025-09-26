import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';
import { Iproduct } from '../../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private fakestoreUrl = 'https://fakestoreapi.com/products';
  private searchUrl = 'https://dummyjson.com/products/search?q=';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return firstValueFrom(this.http.get<Iproduct[]>(this.fakestoreUrl));
  }

  getProductById(id: number) {
    return firstValueFrom(this.http.get<Iproduct>(`${this.fakestoreUrl}/${id}`));
  }

  searchProducts(q: string) {
    return firstValueFrom(this.http.get<any>(`${this.searchUrl}${encodeURIComponent(q)}`));
  }
}


