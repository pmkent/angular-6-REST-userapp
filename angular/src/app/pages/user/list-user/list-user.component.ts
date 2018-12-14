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
export class ListUserComponent implements OnInit {

  users: User[];

  dataSource: MatTableDataSource<User>;
  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'edit', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedRowIndex: string = '';
  selectedUser: User;

  constructor(private router: Router, private userService: UserService) {
    this.populateUserTable();
  }

  private populateUserTable() {
    const users: User[] = [];
    this.userService.getUsers()
      .subscribe(users => this.dataSource.data = users);
    this.dataSource = new MatTableDataSource(users);
    this.selectedUser = undefined;
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
    this.userService.getUsers()
      .subscribe(
        data => { this.users = data; }
      )
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe(
        data => {
          this.users = this.users.filter(u => u !== user);
          this.populateUserTable();
        }
      )
  }

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    if (user.id !== undefined)
      localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

  highlightTableRow(user: User){
    this.selectedRowIndex = user.id.toString();
    this.selectedUser = user;
  }

}