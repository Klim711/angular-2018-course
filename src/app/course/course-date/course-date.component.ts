import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CourseDateComponent),
    multi: true,
  }],
})
export class CourseDateComponent implements ControlValueAccessor {
  public value: string = '';

  writeValue(value: any) {
    if (value !== undefined) {
      this.value = value;
      this.propagateChange(this.value);
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  onChange() {
    this.propagateChange(this.value);
  }

  registerOnTouched() {}
}
