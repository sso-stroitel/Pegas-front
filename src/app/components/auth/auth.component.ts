import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JwtRegAuthControllerService} from '../../api/services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form: FormGroup;

  title = 'Войти в лабораторию';

  constructor(public authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
     this.form = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6)]],
       confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
     });
     this.form.valueChanges.subscribe(data => console.log('>> lal', data))

  }

  radioChange(ev) {
    console.log(ev)
  }

  onSubmit() {
    console.log(this.form.controls);
  }

  inputChange(ev) {
    console.log(ev)
  }

}
