import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export function dateFormatValidator(
  control: AbstractControl): {[key: string]: any} | null {
  const isValid = moment(control.value, 'DD-MM-YYYY', true).isValid();
  return isValid ? null : {'dateWrongFormat': {value: control.value}};
}
