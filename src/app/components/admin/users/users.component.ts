import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: Array<User>;
  public cols: any[];
  public displayEdit = false;
  public displayDelete = false;
  public selectedUser: User;

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.cols = [
      {field: 'id', header: 'Lp', width: '10%'},
      {field: 'login', header: 'Login'},
      {field: 'email', header: 'E-mail', width: '22%'},
      {field: 'role_name', header: 'Rola'},
    ];
    this.adminService.getActiveUsers().subscribe((users: Array<User>) => {
      this.users = [...users];
      let index = 1;
      this.users.forEach((user) => {
        user.id = index++;
      });
    });
  }
  public showDialogEdit(user: User) {
    this.selectedUser = user;
    this.displayEdit = true;
  }
  public showDialogDelete(user: User) {
    this.selectedUser = user;
    this.displayDelete = !this.displayDelete;
  }
  public deleteUser(user: User) {
    this.adminService.dropUser(user.email).subscribe(() => {
      window.location.reload();
      // TODO Zmiana sttusu bez odświeżania
    });
    this.displayDelete = false;
  }
  public closeEditDialog(close: boolean) {
    this.displayEdit = close;
  }

}
