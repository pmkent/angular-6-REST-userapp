import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn} from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { first } from 'rxjs/operators';

import { patternValidator } from '../../../util/patternValidator';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  inputType: string = 'password';

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    let userId = localStorage.getItem('editUserId');

    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }

    this.editForm = this.formBuilder.group(
      {
        id: [],
        firstName: ['', [Validators.required, Validators.minLength(2), forbiddenNameValidator(/bob/i)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        // password: ['password', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
        token: [''],
        roles: [{}],
        showpassword: '' // 2018-12-13
      }
    );

    this.userService.getUserById(+userId)
      .subscribe(
        data => {
          console.log('Edit:Usr '+JSON.stringify(data));
          this.editForm.setValue(data);
        }
      );
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-user']);
        },
        error => {
          alert(error);
        }
      )
  }

  hideShowPassword() {
    if (this.inputType == 'password') {
      this.inputType = 'text';
    } else if (this.inputType == 'text') {
      this.inputType = 'password';
    }
  }

}
