import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/service/servico.service';
import { ProdutoModel } from './produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();
  produtoArray: Array<any> = new Array();

  constructor(private servico: ServicoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.servico.listarProdutos().subscribe(produtos => {
      this.produtoArray = produtos;
    }, error => {
      console.log("Erro!" + error);
    });
  }

  cadastrar() {
    console.log(this.produto)
    this.servico.cadastrarProduto(this.produto).subscribe(a => {
      this.produto = new ProdutoModel()
      this.listar()
    }, err => {
      console.log("Erro ao Cadastrar" + err)
    })
  }

  atualizarProduto(id: Number) {

    this.servico.atualizarProduto(id, this.produto).subscribe(a => {
      this.produto = new ProdutoModel()
      this.listar()
    }, err => {
      console.log("Erro ao atualizar o produto", err)
    })
  }
  removerProduto(id: number) {
    this.servico.excluirProduto(id).subscribe(a => {
      this.produto = new ProdutoModel()
      this.listar()
    }, err => {
      console.log("Erro ao excluir o produto", err)
    })
  }

}