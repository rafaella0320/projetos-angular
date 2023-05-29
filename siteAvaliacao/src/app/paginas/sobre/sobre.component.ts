import { Component, OnInit } from '@angular/core';
import { OrderSiteService } from 'src/app/servico/order-site.service';
OrderSiteService

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  valores: any;

  constructor(private servico: OrderSiteService) { }

  ngOnInit(): void {
    this.valores = this.servico.produtoDetails;
  }
}