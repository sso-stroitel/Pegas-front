import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRegistrationDto} from '../../api/models/user-registration-dto';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form: FormGroup;
  private authTypeUserSelected: UserRegistrationDto['type'];

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

  radioChange({target}) {
    this.authTypeUserSelected = target.value;
  }

  onSubmit() {
    this.authService.postAuthUser(this.form, this.authTypeUserSelected);
  }
}
