import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isSignIn$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }

  public toggleAuthView(value: boolean): void {
    this.isSignIn$.next(value);
  }
}
