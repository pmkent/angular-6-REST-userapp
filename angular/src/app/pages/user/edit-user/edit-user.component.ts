import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { first } from 'rxjs/operators';
import { forbiddenNameValidator } from '../../../util/forbiddenNameValidator';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  inputType: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.inputType = 'password';
    const id = localStorage.getItem('editUserId');

    if (!id) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }

    this.editForm = this.formBuilder.group(
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

        createDt: [ null ],
        updateDt: [ null ],
        updateBy: [ '' ],
        deleteDt: [ null ]
      }
    );

    console.log('%%% User Id is >' + id + '<');

    this.userService.getUser(id)
      .subscribe(
        data => {
          console.log('Edit:Usr ngOnInit ' + JSON.stringify(data));
          this.editForm.setValue(data);
        }
      );
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
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

}
