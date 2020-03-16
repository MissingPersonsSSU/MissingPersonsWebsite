import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  displayName = '';
  displayWarning = false;
  warning = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.displayName = sessionStorage.getItem('displayName');
    if (this.displayName == null) {
      this.router.navigate(['/']);
    }
    this.displayWarningOnClick();
  }

  displayWarningOnClick() {
    if (this.displayName === 'Guest') {
      if ( this.displayWarning === true) {
        this.displayWarning = false;
      } else {
        this.displayWarning = true;
        this.warning = 'You are in Guest Mode, You have restricted access';
      }
    }
  }

}
