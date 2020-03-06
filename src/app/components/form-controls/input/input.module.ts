import {forwardRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import {NG_VALUE_ACCESSOR} from '@angular/forms';



@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule
  ],
  exports: [InputComponent]
})
export class InputModule { }
