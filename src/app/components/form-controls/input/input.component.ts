import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AuthComponent} from '../../auth/auth.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true}]
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() style: {[key: string]: string};
  @Input() inputStyle: {[key: string]: string};
  @Input() isDisabled: boolean;
  @Input() validText: string;
  @Input() value: string;
  @Input() type = 'text';
  @Input() name: string;
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
