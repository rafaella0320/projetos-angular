import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { ContatosComponent } from './page/contatos/contatos.component';
import { ProdutosComponent } from './page/produtos/produtos.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sobre', component:SobreComponent},
  {path:'contatos', component:ContatosComponent},
  {path:'painel@adm', component:ProdutosComponent},
  {path:'login@adm', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
