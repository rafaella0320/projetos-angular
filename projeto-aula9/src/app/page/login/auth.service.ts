import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAut: boolean = false

  constructor(private router: Router) { }
  acesso(user: User) {
    if (user.login === 'adm@senac.br' && user.senha === '123456') {
      this.userAut = true
      alert("Bem vindos! Você será redirecionado ao painel de controle")
      this.router.navigate(['painel@adm'])
    } else {
      this.userAut = false
      alert("Login e senha inválidos, digite novamente")
    }
  }
}



