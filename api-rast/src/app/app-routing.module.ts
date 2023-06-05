import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
PainelComponent
HomeComponent
LoginComponent

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'adm12751', component: LoginComponent},
  {path: 'painel', component: PainelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
