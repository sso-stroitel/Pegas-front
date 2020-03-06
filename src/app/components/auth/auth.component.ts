import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
       password: ['', [Validators.required, Validators.minLength(6)]]
     });
  }

  radioChange(ev) {
    console.log(ev)
  }

  inputChange(ev) {
    console.log(ev)
  }

}
