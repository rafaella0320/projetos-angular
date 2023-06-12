import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'adm12751', component: LoginComponent},
  {path: 'painel', component: PainelComponent},
  {path: 'forms', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
