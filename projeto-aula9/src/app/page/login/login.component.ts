import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User = new User()
  constructor(private authservice: AuthService) { }
  ngOnInit(): void {

  }
  //método fazerlogin
  fzlogin() {
    console.log(this.users)
    this.authservice.acesso(this.users)
  }
}