import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { forbiddenNameValidator } from '../../../util/forbiddenNameValidator';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted: boolean;
  invalidRegistration: boolean;

  errorMsg: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usrSvc: UserService
  ) {}

  onSubmit() {
    console.log('RegComp: User Registration starting ...');
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    this.usrSvc.addUser(this.registrationForm.value)
      .subscribe(
        user => {
          console.log(`RegisterUsr:onSubmit user?? ${user}`);
          if (user === undefined) {
            this.errorMsg = 'Username ' + this.registrationForm.controls['username'].value + ' exists. Please choose another username!';
            this.router.navigate(['register']);
          } else {
            this.errorMsg = null;
            this.router.navigate(['list-user']);
          }
        },
        error => { // Never gets here becuse of UsrSvc error handling!
          this.router.navigate(['register']);
          this.errorMsg = 'Username exists. Please choose another username!';
          console.log(`RegisterUsr:onSubmit: FAILED because ${error} : ` + this.registrationForm.controls['username'].value); // 2018-12-11
        }
    );
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group(
      {
        id: [ '' ],

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

        createDt: [ null ],
        updateDt: [ null ],
        updateBy: [ '' ],
        deleteDt: [ null ]
      }
    );
  }

}
