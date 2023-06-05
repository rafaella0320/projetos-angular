import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
Usuario
Router

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false

  constructor(private router: Router) { }
  acesso(user: Usuario) {
    if (user.login === 'adm@senac.br' && user.senha === '123456') {
      this.usuarioAutenticado = true
      alert("Bem vindos! Você será redirecionado ao painel de controle")
      this.router.navigate(['painel'])
    } else {
      this.usuarioAutenticado = false
      alert("Login e senha inválidos, digite novamente")
    }
  }
}