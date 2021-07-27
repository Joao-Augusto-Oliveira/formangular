import { forwardRef } from '@angular/core';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
})

export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGroupOptions
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  public activate(value: string): void {
    this.writeValue(value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
