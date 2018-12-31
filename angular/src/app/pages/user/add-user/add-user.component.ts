import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { forbiddenNameValidator } from '../../../util/forbiddenNameValidator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  errorMsg: any;

  genders = [
    { value: 'MALE', type: 'Male' },
    { value: 'FEMALE', type: 'Female' },
    { value: 'OTHER', type: 'Other' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usrSvc: UserService
  ) {}

  ngOnInit() {
    this.addUserForm = this.formBuilder.group(
      {
        id: [ '' ], // TODO test

        userId: [ 0 ],
        username: [ '', [Validators.required, Validators.email] ], // 2018-12-22
        firstName: [ '', [Validators.required, Validators.minLength(2), forbiddenNameValidator(/bob/i)] ],
        lastName: [ '', [Validators.required, Validators.minLength(2)] ],
        password: ['', [Validators.required, Validators.minLength(5)] ],
        token: [ '' ],
        addresses: [ null ],
        roles: [ null ],
        country: [ '' ],
        website: [ '' ],
        phones: [ null ],
        emails: [ null ],
        showpassword: '', // bug fix, must add to backend User POJO

        dateOfBirth: [ new Date().toISOString() ],
        gender: ['OTHER'],

        createDt: [ null ],
        updateDt: [ null ],
        updateBy: [ '' ],
        deleteDt: [ null ]
      }
    );
  }

  onSubmit() {
    this.usrSvc.addUser(this.addUserForm.value)
      .subscribe(
        user => {
          console.log(`AddUsr:onSubmit user?? ${user}`); // console.log(`AddUsr:onSubmit user?? ${user.username}`);
          if (user === undefined) {
            this.errorMsg = 'Username ' + this.addUserForm.controls['username'].value + ' exists! Please choose another username.';
            this.router.navigate(['add-user']);
          } else {
            this.errorMsg = null;
            this.router.navigate(['list-user']);
          }
        }
    );
  }

}
