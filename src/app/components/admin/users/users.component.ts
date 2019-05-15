import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private users;
  public cols: any[];
  public displayEdit = false;
  public displayDelete = false;

  constructor(private adminService: AdminService) {
    this.cols = [
      {field: 'id', header: 'Lp'},
      {field: 'login', header: 'Login'},
      {field: 'email', header: 'E-mail'},
      {field: 'role_name', header: 'Rola'}
    ];
  }

  ngOnInit() {
    this.adminService.getActiveUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
      let index = 1;
      this.users.forEach((user) => {
        user.id = index++;
      });
    });
  }
  public showDialogEdit() {
    this.displayEdit = true;
  }
  public showDialogDelete() {
    this.displayDelete = !this.displayDelete;
  }
  public deleteUser() {
    this.displayDelete = false;
  }

}
