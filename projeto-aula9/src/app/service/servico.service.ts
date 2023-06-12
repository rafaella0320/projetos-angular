import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoModel } from '../page/produtos/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private url: string = "http://localhost:3000/produtos";
  
  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<any> {
    return this.http.get(this.url);
  }

  cadastrarProduto(produto: ProdutoModel): Observable<any> {
    return this.http.post(this.url, produto);
  }

  atualizarProduto(id: any, produto: ProdutoModel): Observable<any> {
    return this.http.put(`${this.url}/${id}`, produto);
  }

  excluirProduto(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
