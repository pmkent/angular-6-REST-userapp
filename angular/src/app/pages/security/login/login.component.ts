import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { patternValidator } from '../../../util/patternValidator';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  loading = false;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private authSvc: AuthService
    ) {}

  ngOnInit() {
    this.authSvc.logout(); // First reset login status

    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), , Validators.minLength(2)]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
      }
    );
  }

  public login() {
    console.log('LoginComponent: login() : '+this.loginForm.value + ' email '+this.loginForm.controls['email'].value + ' password '+this.loginForm.controls['password'].value);//+' returnUrl '+this.returnUrl);
    this.loading = true;
    this.authSvc.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .subscribe(
        data => {
          console.log('Login: '+this.loginForm.controls['email'].value+' Logged in!!');
          this.router.navigate(['list-user']);
        },
        error => { 
          console.log('Login: '+this.loginForm.controls['email'].value+' Logged FAILURE!!');
          this.router.navigate(['login']);
          this.loading = false;
         }
      );
  }  

}
