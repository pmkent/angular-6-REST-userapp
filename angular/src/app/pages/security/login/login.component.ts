import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { patternValidator } from '../../../util/patternValidator';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: false; // boolean = false;
  invalidLogin: false; // boolean = false;

  loading = false;
  errorMsg: any;

  // empForm: FormGroup; // 2018-12-15 tutorial
  // departments = [
  //   { id: 1, value: 'Dep 1' },
  //   { id: 2, value: 'Dep 2' },
  //   { id: 3, value: 'Dep 3' }
  // ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authSvc: AuthService
    ) {
      this.initLoginForm();
    }

  initLoginForm() {
    this.authSvc.logout(); // First reset login status

    this.loginForm = this.formBuilder.group(
      {
        email: [ '', [ Validators.required, Validators.email ] ],
        password: [ '', [ Validators.required, Validators.minLength(5), Validators.maxLength(20) ] ]
        // email: ['', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), , Validators.minLength(2)]],
        // password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
      }
    );

    // this.empForm = this.formBuilder.group(
    //   {
    //     $key: [null],
    //     fullName: ['', Validators.required ],
    //     email: ['', Validators.email ],
    //     mobile: ['', [ Validators.required, Validators.minLength(8) ] ],
    //     city: [''],
    //     gender: ['1'],
    //     department: [0],
    //     hireDate: [''],
    //     isPermanent: false
    //   }
    // );
  }

  ngOnInit() {}

  public login() {
    console.log('LoginComponent: login() : email ' + this.loginForm.controls['email'].value +
      ' password ' + this.loginForm.controls['password'].value);
    this.loading = true;
    this.authSvc.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .subscribe(
        data => {
          this.errorMsg = null;
          console.log('Login: You are logged in as ' + this.loginForm.controls['email'].value + '!!');
          this.router.navigate(['list-user']);
        },
        error => {
          this.errorMsg = 'Username and/or password do not match!';
          console.log('Login: ' + this.loginForm.controls['email'].value + ' ' +
            this.loginForm.controls['password'].value + ' :=> ' + this.errorMsg); // 2018-12-11
          this.router.navigate(['login']);
          this.loading = false;
         }
      );
  }

  // 2018-12-15
  // onClear() {
  //   // this.loginForm.reset();
  //   this.empForm.reset();
  //   this.initFormGroup();
  // }
  // initFormGroup() {
  //   this.empForm.setValue(
  //     {
  //       $key: null,
  //       fullName: '',
  //       email: '',
  //       mobile: '',
  //       city: '',
  //       gender: '1',
  //       department: 0,
  //       hireDate: '',
  //       isPermanent: false
  //     }
  //   );
  // }

}
