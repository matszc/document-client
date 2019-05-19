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
  public targetLogin;
  public targetEmail;
  public user;

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
  public showDialogEdit(user) {
    this.user = user;
    this.displayEdit = true;
  }
  public showDialogDelete(targetEmail, targetLogin) {
    this.targetEmail = targetEmail;
    this.targetLogin = targetLogin;
    this.displayDelete = !this.displayDelete;
  }
  public deleteUser(email: string) {
    const user = [''];
    console.log(email);
    this.adminService.dropUser(email, user).subscribe(() => {
      window.location.reload();
    });
    this.displayDelete = false;
  }
  public closeEditDialog(close: boolean) {
    this.displayEdit = close;
  }

}
