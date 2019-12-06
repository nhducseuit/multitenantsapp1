import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { TenantAwaredItem } from '../shared/interfaces/tenant-awared-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  template: `
  <form *ngIf="formInputItems" [formGroup]="registrationFormGroup">
    <ng-container *ngFor="let item of formInputItems" formInput [item]="item" [formGroup]="registrationFormGroup"></ng-container>
    <div class="action-buttons">
      <button mat-raised-button color="primary" (click)="submitForm()">Submit</button>
      <button mat-raised-button color="accent" (click)="goBack()">Go back</button>
    </div>
  </form>
  <div class="form-value">
    <h4>Form value</h4>
    <span>{{ registrationFormGroup.value | json }}</span>
  </div>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      margin-left: 2em;
    }
    .action-buttons {
      display: flex;
      >* {
        margin: 0 1rem;
      }
    }
    .form-value {
      margin-top: 2rem;
    }
  `]
})
export class RegistrationComponent implements OnInit {

  registrationFormGroup: FormGroup = this.formBuilder.group({});
  tenantData: any;
  formInputItems: TenantAwaredItem[];

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router) { }

  ngOnInit() {
    this.tenantData = JSON.parse(localStorage.getItem('tenant'));
    const tenantId = this.tenantData.id;
    this.registrationService.getRegistrationFormConfig(tenantId).then(configs => {
      this.formInputItems = this.registrationService.getConfiguredFormInputs(configs);
    });
  }

  submitForm() {
    console.log('Form is submitted');
    // this.goBack();
  }

  goBack() {
    this.router.navigate(['login']);
  }

}
