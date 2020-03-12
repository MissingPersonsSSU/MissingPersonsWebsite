import { Component, OnInit } from '@angular/core';
import { BasicLogin } from '../core/model/basicLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  basicLogin: BasicLogin;

  constructor() { }

  ngOnInit() {
    this.basicLogin = new BasicLogin();
  }

  SubmitBasicLogin() {
    if (this.basicLogin.email == null) {
      this.errorMessage = 'Email can not be empty';
    } else if (this.basicLogin.password == null) {
      this.errorMessage = 'Password can not be empty';
    } else {
      this.errorMessage = '';
    }
  }

}
