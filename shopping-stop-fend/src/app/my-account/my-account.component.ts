import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  user: any = {}; 
  isEditMode = false; 
  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.setUser();
  }
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
  saveChanges(): void {
    this.userService.updateMe(this.user).subscribe(data=>{
      this.isEditMode = false; // Disable edit mode after saving changes
      console.log(this.user,data);
      this.setUser();
    })
  }
  setUser() {
    this.userService.fetchMe().subscribe(
      (data: any) => {
        this.user = {email:data?.email,first_name:data.first_name,last_name:data.last_name,password:data.password};
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}