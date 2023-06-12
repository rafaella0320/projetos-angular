import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importar service
ServicosService
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServicosService } from './service/servicos.service';
import { AlunosComponent } from './alunos/alunos.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    LoginComponent,
    PainelComponent,
    HomeComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }