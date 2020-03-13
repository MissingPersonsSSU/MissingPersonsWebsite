import { Component, OnInit } from '@angular/core';
import { BasicLogin } from '../core/model/basicLogin';
import { AuthService } from '../core/firebaseCalls/Auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  basicLogin: BasicLogin;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.basicLogin = new BasicLogin();
  }

  SubmitBasicLogin() {
    if (this.basicLogin.email == null) {
      this.errorMessage = 'Please enter a valid Email';
    } else if (this.basicLogin.password == null) {
      this.errorMessage = 'Please enter a valid Password';
    } else {
      this.errorMessage = '';
    }
  }

  loginGoogle() {
    this.auth.doGoogleLogin()
    .then(res => {
     alert('Logged in' + res.displayName);
    });
  }
}
