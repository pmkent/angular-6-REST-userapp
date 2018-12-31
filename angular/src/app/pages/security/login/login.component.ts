import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted: false;
  invalidLogin: false;

  loading = false;
  errorMsg: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authSvc: AuthService,
    ) {
      this.initLoginForm();
    }

  initLoginForm() {
    this.authSvc.logout(); // First reset login status

    this.loginForm = this.formBuilder.group(
      {
        email: [ '', [ Validators.required, Validators.email ] ],
        password: [ '', [ Validators.required, Validators.minLength(5), Validators.maxLength(20) ] ]
      }
    );
  }

  public login() {
    console.log('LoginComponent: login() : email ' + this.loginForm.controls['email'].value +
      ' password ' + this.loginForm.controls['password'].value);
    this.loading = true;
    this.authSvc.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .subscribe(
        user => {
          console.log('Login: You are trying to log in as ' + this.loginForm.controls['email'].value + ', ' +
            this.loginForm.controls['password'].value + ' null data? ' + (user == null));
          if (user == null) {
            this.errorMsg = 'Login failed: Username and/or password do not match!';
            this.router.navigate(['login']);
          } else {
            this.errorMsg = null;
            this.authSvc.loggedInUser = user;
            this.router.navigate(['list-user']);
            console.log('Successfully logged in user : ' + JSON.stringify(user));
          }
        }
      );
  }

}
