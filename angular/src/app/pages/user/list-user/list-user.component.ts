import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent { // export class ListUserComponent implements OnInit {

dataSource: MatTableDataSource<User>;
displayedColumns = ['userId', 'firstName', 'lastName', 'username', 'edit', 'delete'];

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(private router: Router, private userSvc: UserService) {
    this.populateUserTable();
}

private populateUserTable() {
  const users: User[] = [];
    this.userSvc.getUsers()
      .subscribe(users => this.dataSource.data = users);
    this.dataSource = new MatTableDataSource(users);
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

private loadAllUsers() {}

deleteUser(user: User): void { // deleteUser(userId: number): void {
  this.userSvc.deleteUser(user) // this.userService.deleteUser(userId.toString())
    .subscribe(
      data => {
        // this.users = this.users.filter(u => u !== user);
        this.populateUserTable();
        console.log(`LstUsr:delete ${data} usrId : ` + user.userId);
        this.router.navigate(['list-user']);  // TODO test this.
      }
    );
}

editUser(user: User): void {
  console.log('ListUsr:editUser userId >' + user.userId + '<');
  localStorage.removeItem('editUserId');
  if (user.userId !== undefined) {
    localStorage.setItem('editUserId', user.userId.toString());
  }
  this.router.navigate(['edit-user']);
}

addUser(): void {
  this.router.navigate(['add-user']);
}

  /*
  users: User[];
  userId: number;

  dataSource: MatTableDataSource<User>;
  displayedColumns = ['userId', 'firstName', 'lastName', 'email', 'edit', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedRowIndex: number;
  selectedUser: User;

  constructor(private router: Router, private userService: UserService) {
    this.populateUserTable();
  }

  private populateUserTable() {
    // let users: User[] = [];
    this.userService.getUsers()
      // .subscribe(usrs => this.users = usrs);
      .subscribe(
        // usrs2 => this.users = usrs2,
        usrs => this.dataSource.data = usrs
        );
    this.dataSource = new MatTableDataSource(this.users);
    this.selectedUser = undefined;
    console.log('LstUsr:populateTable ' + this.users.length);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    // this.populateUserTable();
    // this.userService.getUsers().subscribe(data => { this.users = data; });
  }

  deleteUser(user: User): void { // deleteUser(userId: number): void {
    this.userService.deleteUser(user) // this.userService.deleteUser(userId.toString())
      .subscribe(
        data => {
          // this.users = this.users.filter(u => u !== user);
          this.populateUserTable();
          console.log(`LstUsr:delete ${data} usrId : ` + user.userId);
          this.router.navigate(['list-user']);  // TODO test this.
        }
      );
  }

  editUser(user: User): void {
    console.log('ListUsr:editUser userId >' + user.userId + '<');
    localStorage.removeItem('editUserId');
    if (user.userId !== undefined) {
      localStorage.setItem('editUserId', user.userId.toString());
    }
    this.router.navigate(['edit-user']);
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

  highlightTableRow(user: User) {
    this.selectedRowIndex = user.userId;
    this.selectedUser = user;
  }
*/
}
