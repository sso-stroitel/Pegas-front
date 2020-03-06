import { NgModule } from '@angular/core';
import {AuthButtonModule} from './auth-button/auth-button.module';
import {InputModule} from './input/input.module';

@NgModule({
  imports: [
    AuthButtonModule,
    InputModule
  ]
})
export class FormControlModule { }
