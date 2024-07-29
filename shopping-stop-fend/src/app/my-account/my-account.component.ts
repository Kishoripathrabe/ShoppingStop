import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  user: any = {}; 
  isEditMode = false; 
  languages = [
    { value: 'en', name: 'English' },
    { value: 'hi', name: 'Hindi' }
    ];
    languageObject:any={
      'hi':'Hindi',
      'en':'English',
    }
  constructor(private userService: UserService , private translate: TranslateService) { }

  ngOnInit(): void {
   this.setUser();
  }
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
  saveChanges(): void {
    this.userService.updateMe(this.user).subscribe(data=>{
      this.isEditMode = false; // Disable edit mode after saving changes
      this.setUser();
    })
  }
  setUser() {
    this.userService.fetchMe().subscribe(
      (data: any) => {
        this.user = {email:data?.email,first_name:data.first_name,last_name:data.last_name,password:data.password,language:data.language};
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}