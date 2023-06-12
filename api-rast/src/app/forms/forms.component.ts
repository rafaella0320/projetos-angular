import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{comida: string}> = [
    {comida: "X-Salada"},
    {comida: "X-Bacon"},
    {comida: "Coxinha"},
    {comida: "Hamburguer"}
  ]

  constructor(){}
  ngOnInit(): void {
    
  }

}
