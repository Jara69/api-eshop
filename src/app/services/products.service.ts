import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Host from '../Host';
import {CategoryPage} from '../models/CategoryPage.model';
import {Product} from '../models/Produkt.model';
import {Images} from '../models/Obrazky.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  getProduct() {
    const headers = new HttpHeaders().set('access-token', Host.token);

    return this.http.get<Product[]>('/api/products', {headers});
  }

  getImage() {

    return this.http.get<Images[]>('/assets/products');
  }
}
