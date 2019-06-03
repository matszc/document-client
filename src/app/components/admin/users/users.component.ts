import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {MessageService} from 'primeng/api';

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
  public selectedUser;

  constructor(private adminService: AdminService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.cols = [
      {field: 'id', header: 'Lp', width: '10%'},
      {field: 'login', header: 'Login'},
      {field: 'email', header: 'E-mail', width: '22%'},
      {field: 'role_name', header: 'Rola'},
    ];
    this.adminService.getActiveUsers().subscribe((users) => {
      this.users = users;
      let index = 1;
      this.users.forEach((user) => {
        user.id = index++;
      });
    });
  }
  public showDialogEdit(user) {
    this.selectedUser = user;
    this.displayEdit = true;
  }
  public showDialogDelete(targetEmail, targetLogin) {
    this.targetEmail = targetEmail;
    this.targetLogin = targetLogin;
    this.displayDelete = !this.displayDelete;
  }
  public deleteUser(targetEmail: string) {
    this.adminService.dropUser(targetEmail).subscribe(() => {
      window.location.reload();
      // TODO Zmiana sttusu bez odświeżania
    });
    this.displayDelete = false;
  }
  public closeEditDialog(close: boolean) {
    this.displayEdit = close;
  }

}
