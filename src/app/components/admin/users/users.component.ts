import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private users;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
/*    this.adminService.getActiveUsers().subscribe((users) => {
      // console.log(users);
    });*/
  }

}
