import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './components/header/header.module';
import {AuthModule} from './components/auth/auth.module';
import {FormControlModule} from './components/form-controls/form-control.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AuthModule,
    FormControlModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
