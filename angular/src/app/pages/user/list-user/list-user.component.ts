import { Component, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  dataSource: MatTableDataSource<User>;
  displayedColumns = ['userId', 'firstName', 'lastName', 'username', 'dateOfBirth', 'edit', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  errorMsg: any;

  constructor(
    private router: Router,
    private userSvc: UserService,
    private authSvc: AuthService
  ) {
      this.populateUserTable();
  }

  private populateUserTable() {
    this.userSvc.getUsers()
      .subscribe(usrs => this.dataSource.data = usrs);
    const users: User[] = [];
    this.dataSource = new MatTableDataSource(users);
    ////////////////////////////////
    // this.userSvc.getUsers()
    //   .subscribe(
    //     usrs => this.dataSource.data = usrs,
    //     users => {
    //       console.log(`LstComp:populate() Fetched all ${users} : users.`);
    //       this.dataSource.data = users,
    //       this.dataSource = new MatTableDataSource(users);
    //     }
    //   );
    //////////////////
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  deleteUser(user: User): void {
    if (confirm('Are you sure you want to delete this user?')) {
      console.log('LstUsr: logusr? ' + (this.authSvc.loggedInUser !== null) +
        ' loggedin ' + this.authSvc.loggedInUser.username +
        ' uname ' + user.username +
        ' equal ' + (this.authSvc.loggedInUser.username === user.username) +
        ' ?? ' + ((this.authSvc.loggedInUser !== null) && (this.authSvc.loggedInUser.username === user.username))
      );
      if ((this.authSvc.loggedInUser !== null) && (this.authSvc.loggedInUser.username === user.username)) {
        this.errorMsg = 'Sorry! Cannot delete yourself! Please contact admin.';
        this.router.navigate(['list-user']);
      } else {
        this.errorMsg = null;
        this.userSvc.deleteUser(user)
        .subscribe(
          data => {
            console.log(`LstUsr:deleteUsr user?? ${user}`);
            if (data === undefined) {
              this.errorMsg = 'Unable to delete ' + user.username + '! Please contact admin.';
              this.router.navigate(['list-user']);
            } else {
              this.errorMsg = null;
              console.log(`LstUsr:delete ${data} usrId : ` + user.username);
              this.populateUserTable();
              this.router.navigate(['list-user']);
            }
          }
        );
      }
    }
  }

  editUser(user: User): void {
    console.log('ListUsr:editUser userId >' + user.userId + '<');
    localStorage.removeItem('editUserId');
    if (user.userId !== undefined) {
      localStorage.setItem('editUserId', user.id);
    }
    this.router.navigate(['edit-user']);
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

}
