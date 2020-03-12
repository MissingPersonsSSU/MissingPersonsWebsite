import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  googlePath = 'src\assets\Social-Media-Icons\Google.png';

  constructor() { }

  ngOnInit() {
  }

}
