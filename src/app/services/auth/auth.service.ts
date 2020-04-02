import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {JwtRegAuthControllerService} from '../../api/services/jwt-reg-auth-controller.service';
import {UserRegistrationDto} from '../../api/models/user-registration-dto';
import {JwtResponse} from '../../api/models/jwt-response';
import {map} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  isSignIn$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private authApiService: JwtRegAuthControllerService) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public toggleAuthView(value: boolean): void {
    this.isSignIn$.next(value);
  }

  public postAuthUser(form: FormGroup, selectedType) {
    console.log(form.getRawValue(), this.isSignIn$.getValue())
    // TODO костыль нажо поправить на нормальный поток
    if (this.isSignIn$.getValue()) {
      this.signInUser(form.getRawValue());
    } else {
      const formData = {...form.getRawValue(), type: selectedType};
      this.signUpUser(formData);
    }
  }

  public signUpUser(user: UserRegistrationDto): Observable<JwtResponse> {
    return this.authApiService.registrationUsingPOST(user).pipe(map(data => this.setResponseData(data)));
  }

  // TODO поменять на релевантный интерфейс
  public signInUser(user: UserRegistrationDto) {
    return this.authApiService.authenticationUsingPOST(user).pipe(map(data => this.setResponseData(data)));
  }

  private setResponseData(data) {
    localStorage.setItem('currentUser', JSON.stringify(data));
    this.currentUserSubject.next(data);
    return data;
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
