import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

const API_URL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL)
  }
  getId(id: string | null): Observable<Product> {
    return this.http.get<Product>(API_URL + `/${id}`);
  }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL, product);
  }
  delete(id: any): Observable<Product> {
    // @ts-ignore
    return this.http.delete(API_URL + `${id}`)
  }

  update(id: any, vote: Product): Observable<Product> {
    return this.http.put<Product>(API_URL + `${id}`, vote);
  }
}
