import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VcrHostDirective } from '../shared/directives/vcr-host.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationFormGroup: FormGroup;

  @ViewChild(VcrHostDirective, { static: true }) vcrHost: VcrHostDirective;

  constructor() { }

  ngOnInit() {
  }

}
