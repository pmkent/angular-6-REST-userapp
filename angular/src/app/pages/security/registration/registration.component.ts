import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { patternValidator } from '../../../util/patternValidator';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted: boolean = false;
  invalidRegistration: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  onSubmit() {
    console.log('RegComp: User Registration starting ...');
    this.submitted = true;
    if (this.registrationForm.invalid) return;
    this.userService.createUser(this.registrationForm.value)
      .subscribe(
        data => {
          this.router.navigate(['list-user']);
        }
    );
  }  

  ngOnInit() {
    this.registrationForm = this.formBuilder.group(
      {
        id: [],
        firstName: ['', [Validators.required, Validators.minLength(2), forbiddenNameValidator(/bob/i)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
      }
    );
  }  

}
