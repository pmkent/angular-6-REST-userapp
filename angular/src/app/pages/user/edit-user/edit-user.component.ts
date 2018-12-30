import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { first } from 'rxjs/operators';
import { forbiddenNameValidator } from '../../../util/forbiddenNameValidator';

///////////////////////
// import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
import { AppDateAdapter, APP_DATE_FORMATS} from '../../../util/app-date-adapter';
//////////////////////////


// import {FormControl} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import {MatDatepicker} from '@angular/material/datepicker';

// import * as moment from 'moment';
// import { Moment } from 'moment';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment } from 'moment';
// import { _rollupMoment, Moment} from 'moment';

// const moment = _rollupMoment || _moment;
const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/

// Important DO NOT DELETE
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM-DD-YYYY', // 'MM/YYYY',
  },
  display: {
    dateInput: 'MM-DD-YYYY', // 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
//// DO NOT DELETE

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],

  // providers: [
  //   { provide: DateAdapter, useClass: AppDateAdapter },
  //   { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  // ]

  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class EditUserComponent implements OnInit {

  user: User;
  editUserForm: FormGroup;
  inputType: string;

  localeString: string; // = 'en';
  // dateOfBirth: Date;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ////////////////////////////
  // dateOfBirth = new FormControl(moment());

  // chosenYearHandler(normalizedYear: Moment) {
  //   const ctrlValue = this.dateOfBirth.value;
  //   ctrlValue.year(normalizedYear.year());
  //   this.dateOfBirth.setValue(ctrlValue);
  // }

  // chosenMonthHandler(normlizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
  //   const ctrlValue = this.dateOfBirth.value;
  //   ctrlValue.month(normlizedMonth.month());
  //   this.dateOfBirth.setValue(ctrlValue);
  //   datepicker.close();
  // }
  ////////////////////
  // changeViewDate(num, datePart) {
  //   this.dateOfBirth.add(num, datePart);
  // }
  // canChange(dateToCheck, num, datePart) {
  //   const clonedDate = moment(dateToCheck);
  //   clonedDate.add(num, datePart);
  //   const minDate = moment().add(-1, 'month');
  //   const maxDate = moment().add(1, 'year');

  //   return clonedDate.isBetween(minDate, maxDate);
  // }
  ////////////////////

  ngOnInit() {
    this.inputType = 'password';
    const id = localStorage.getItem('editUserId');

    if (!id) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }

    this.editUserForm = this.formBuilder.group(
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
        showpassword: 'text', // bug fix, must add to backend User POJO

        dateOfBirth: [ new Date().toISOString() ], // moment() ],
        gender: ['OTHER'],

        createDt: [ null ],
        updateDt: [ null ],
        updateBy: [ '' ],
        deleteDt: [ null ]
      }
    );

    console.log('%%% User Id is >' + id + '<');

    this.userService.getUser(id)
      .subscribe(
        user => {
          console.log('EditUsr: ngOnInit ' + JSON.stringify(user));
          this.editUserForm.setValue(user);
          console.log('DoB : ' + new Date(user.dateOfBirth).toISOString() );
          this.editUserForm.controls['dateOfBirth'].setValue(new Date(user.dateOfBirth).toISOString());
        }
      );
  }

  onSubmit() {
    this.userService.updateUser(this.editUserForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log('Edit:Usr onSubmit ' + JSON.stringify(data));
          this.router.navigate(['list-user']);
        },
        error => {
          alert(error);
        }
      );
  }

  hideShowPassword() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else if (this.inputType === 'text') {
      this.inputType = 'password';
    }
  }

  onClear() {
    this.editUserForm.reset();
    this.initFormGroup();
  }
  initFormGroup() {
    this.editUserForm.setValue(
      {
        id: '',

        userId: 0,
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        token: '',
        addresses: null,
        roles: null,
        country: '',
        website: '',
        phones: null,
        emails: null,
        showpassword: 'text', // bug fix, must add to backend User POJO

        dateOfBirth: new Date(), // .toISOString(), // moment(),
        gender: 'OTHER',

        createDt: null,
        updateDt: null,
        updateBy: '',
        deleteDt: null
      }
    );
  }

}
