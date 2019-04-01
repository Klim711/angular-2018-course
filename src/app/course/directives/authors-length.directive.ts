import { AbstractControl } from '@angular/forms';

export function arrayLengthValidator(minLength: number) {
  return function authorsLengthValidator(
    control: AbstractControl): {[key: string]: any} | null {
    const isValid = control.value ? control.value.length >= minLength : false;
    return isValid ? null : {'arrayMinLength': {value: control.value}};
  }
}
