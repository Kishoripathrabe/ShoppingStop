import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-mgm',
  templateUrl: './user-mgm.component.html',
  styleUrls: ['./user-mgm.component.scss']
})
export class UserMgmComponent {
  users: any;
  constructor(private userService: UserService, private router: Router) {
    this.getUser();
  }
  getUser() {
    this.userService.getCustomerData().subscribe((data: any) => {
      this.users = data;
    })
  }
  editUser(userId: any) {
    this.router.navigate(['adminpage','edit-user', userId]);
  }
}
