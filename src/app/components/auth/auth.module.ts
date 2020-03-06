import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './auth.component';
import {AuthButtonModule} from '../form-controls/auth-button/auth-button.module';
import {InputModule} from '../form-controls/input/input.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthButtonModule,
    InputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
