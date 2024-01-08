import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonGuard } from './guards/anon.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path: '', 
    children: [
      {path: '', canActivate:[AnonGuard],  component: LoginComponent},
      {path: 'signup',canActivate:[AnonGuard], component: SignupComponent},
      {path:'home',canActivate:[AuthGuard],component:HomeComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
