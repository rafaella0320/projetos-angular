import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private url: string = "http://localhost:3000/produto";
  
  constructor(private http: HttpClient) { }

  listar():Observable<any> {
    return this.http.get(`${this.url}`);
  }
}