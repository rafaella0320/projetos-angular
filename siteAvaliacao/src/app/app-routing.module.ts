import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
InicialComponent
ContatoComponent
SobreComponent

const routes: Routes =
[{ path: '', component: InicialComponent }, 
{ path: 'sobre', component: SobreComponent }, 
{ path: 'contato', component: ContatoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
