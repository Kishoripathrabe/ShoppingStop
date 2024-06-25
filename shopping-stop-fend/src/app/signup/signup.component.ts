import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  loading = false;

  constructor( private http:HttpClient, private router: Router,private alert:AlertService,
    private userService: UserService) {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      first_name: new FormControl(null, [Validators.required]),
    });
  }

  signup() {
    this.loading = true;
   this.http.post("https://shoppingstopbackend.onrender.com/api/user/signup",this.signupForm.value).subscribe((data:any) => {
      this.loading = false;
      this.alert.success("User Created Successfully");
      this.userService.addActivity("User Created Successfully").subscribe();

      this.router.navigate(['']);
    },(err)=>{
      this.alert.error(err.error.msg);
    });
  }

  toLoginPage() {
    this.router.navigate(['']);
  }
}
