import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  loading = false;

  constructor( private http:HttpClient, private router: Router,private alert:AlertService) {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      first_name: new FormControl(null, [Validators.required]),
    });
  }

  signup() {
    this.loading = true;
   this.http.post("http://localhost:5000/api/user/signup",this.signupForm.value).subscribe((data:any) => {
      this.loading = false;
      this.alert.success("User Created Successfully");
      this.router.navigate(['']);
    });
  }

  toLoginPage() {
    this.router.navigate(['']);
  }
}
