import { Component, OnInit } from '@angular/core';
import { BasicLogin } from '../core/model/basicLogin';
import { AuthService } from '../core/firebaseCalls/Auth/auth.service';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  basicLogin: BasicLogin;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.basicLogin = new BasicLogin();
  }

  SubmitBasicLogin() {
     this.fieldCheck();
  }

  fieldCheck() {
    const at = '@';
    const dot = '.com';

    if (this.basicLogin.email == null || !this.basicLogin.email.includes(at) || !this.basicLogin.email.includes(dot)) {
      this.errorMessage = 'Please enter a valid Email';
    } else if (this.basicLogin.password == null) {
      this.errorMessage = 'Please enter a valid Password';
    } else {
      this.errorMessage = '';
    }
  }

  loginGuest() {
    sessionStorage.setItem('logintype', 'guest');
    sessionStorage.setItem('displayName', 'Guest');
    sessionStorage.setItem('photoURL', 'Guest');
    sessionStorage.setItem('email', 'Guest');
    this.router.navigate(['/home']);
  }

  loginGoogle() {
    this.auth.doGoogleLogin()
    .then(res => {
      sessionStorage.setItem('logintype', 'google');
      sessionStorage.setItem('displayName', res.user.displayName);
      sessionStorage.setItem('photoURL', res.user.photoURL);
      sessionStorage.setItem('email', res.user.email);
      this.router.navigate(['/home']);
      // console.log(res);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    });
  }
}
