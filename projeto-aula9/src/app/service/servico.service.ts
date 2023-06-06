import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private url: string = "http://localhost:3000/produtos";
  
  constructor(private http: HttpClient) { }

  listarProdutos():Observable<any> {
    return this.http.get(`${this.url}`);
  }
}