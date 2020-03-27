import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {AuthModule} from '../../components/auth/auth.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    AuthModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
