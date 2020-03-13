import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  displayName = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.displayName = sessionStorage.getItem('displayName');
    if (this.displayName == null) {
      this.router.navigate(['/']);
    }
  }

}
