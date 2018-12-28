import { Component, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

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
        .subscribe(usrs => this.dataSource.data = usrs);
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

  deleteUser(user: User): void {
    this.userSvc.deleteUser(user)
      .subscribe(
        data => {
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
      localStorage.setItem('editUserId', user.id);
    }
    this.router.navigate(['edit-user']);
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

}
