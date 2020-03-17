import { Component, OnInit, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { Router } from '@angular/router';
import { MissingPersonModel } from '../models/missingPersonModel';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  displayName = '';
  displayWarning = false;
  warning = '';

  filterByGroup = 'All';

  // for now replace with missingUser model
  img = null;
  gender = 'female';
  missingPerson: MissingPersonModel;

  constructor(private router: Router) { }

  ngOnInit() {
    this.securityCheck();
    this.displayWarningOnClick();
    this.imageSelector();
    this.modelinti();
  }

  securityCheck() {
    this.displayName = sessionStorage.getItem('displayName');
    if (this.displayName == null) {
      this.router.navigate(['/']);
    }
  }
  modelinti() {
    this.missingPerson = new MissingPersonModel();
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

  filterLabel(filter: any) {
    this.filterByGroup = filter;
  }

  imageSelector() {
    if (this.img == null) {
      if (this.gender.toLocaleUpperCase() === 'MALE') {
        this.img = '../../assets/Icons/imgDefaults/icons8-user-male-skin-type-4-64.png';
      } else {
        this.img = '../../assets/Icons/imgDefaults/icons8-user-female-skin-type-5-64.png';
      }
    }
  }

  fullDetails() {
    if (this.displayWarning) {
      alert('You have Restricted Access');
    }
  }

}
