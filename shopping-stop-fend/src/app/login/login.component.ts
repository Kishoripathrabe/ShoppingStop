import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AuthUtils } from '../utility/auth-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;

  constructor( private http:HttpClient, private router: Router,private alert:AlertService) {
    this.loginForm = new FormGroup({
      email: new FormControl("mj@gmail.com", [Validators.required, Validators.email]),
      password: new FormControl("mj@gmail.com", [Validators.required])
    });
  }

  login() {
    this.loading = true;
   this.http.get("http://localhost:5000/api/user/login",{params:this.loginForm.value}).subscribe((data:any) => {
    if(data.token){
      AuthUtils.setAuthToken(data.token)
      AuthUtils.setUserType(data.type)
      this.loading = false;
      this.alert.success(data.msg);
      this.router.navigate(['home']);
    }else{
      this.loading = false;
      this.alert.error(data.msg);
    }

    });
  }

  toSignUpPage() {
    this.router.navigate(['signup']);
  }


}
