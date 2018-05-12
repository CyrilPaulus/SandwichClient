import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers:[{provide: NG_VALIDATORS, useExisting:CustomValidatorDirective, multi:true}]
})
export class CustomValidatorDirective implements Validator {
  @Input('appCustomValidator')
  public validatorMethod: () => {[key: string]: any};

  constructor() { }

  public validate(control: AbstractControl) : {[key: string]: any} {
    return this.validatorMethod();
  }

}
