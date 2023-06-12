import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/page/produtos/produto.model';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
}
