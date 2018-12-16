import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';

import { patternValidator } from '../../../util/patternValidator';
import { forbiddenNameValidator } from '../../../util/forbiddenNameValidator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
        id: [],
        firstName: ['', [Validators.required, Validators.minLength(2), forbiddenNameValidator(/bob/i)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
      }
    );
  }

  onSubmit() {
    this.userService.createUser(this.addForm.value)
      .subscribe(
        data => {
          this.router.navigate(['list-user']);
        }
    );
  }

}
