import { Directive, ViewContainerRef, Input, ComponentFactoryResolver, OnInit } from '@angular/core';
import { TenantAwaredItem } from '../shared/interfaces/tenant-awared-item.interface';
import { TenantAwaredInput } from './tenant-awared-input.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InputConfig } from './input-config.interface';

@Directive({
  selector: '[formInput]'
})
export class FormInputDirective implements OnInit {
  @Input() item: TenantAwaredItem;
  @Input() formGroup: FormGroup;
  constructor(
    private cfr: ComponentFactoryResolver,
    private vcr: ViewContainerRef,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormControl();
    this.initInput();
  }

  initFormControl() {
    if (this.item.data) {
      const validatorFns = (this.item.data as InputConfig).validators.map(validator => validator.validatorFn);
      this.formGroup.addControl(this.item.data.formControlName, this.formBuilder.control(null, validatorFns));
    }
  }

  initInput() {
    if (this.item.component) {
      const chartComponent = this.cfr.resolveComponentFactory(this.item.component);
      const chartComponentRef = this.vcr.createComponent(chartComponent);
      (chartComponentRef.instance as TenantAwaredInput).config = this.item.data;
      (chartComponentRef.instance as TenantAwaredInput).formGroup = this.formGroup;
      chartComponentRef.changeDetectorRef.detectChanges();
    }
  }
}
