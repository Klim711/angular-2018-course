import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-course-length',
  templateUrl: './course-length.component.html',
  styleUrls: ['./course-length.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CourseLengthComponent),
    multi: true,
  }],
})
export class CourseLengthComponent implements ControlValueAccessor {
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
