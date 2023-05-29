import { Component , OnInit} from '@angular/core';
import { OrderSiteService } from 'src/app/servico/order-site.service';
OrderSiteService

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {
  valores: any;

  constructor(private servico: OrderSiteService) { }

  ngOnInit(): void {
    this.valores = this.servico.produtoDetails;
  }
}