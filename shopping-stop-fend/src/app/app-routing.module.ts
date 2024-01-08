import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from './guards/admin.guard';
import { AnonGuard } from './guards/anon.guard';
import { AuthGuard } from './guards/auth.guard';
import { NonadminGuard } from './guards/nonadmin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path: '', 
    children: [
      {path: '', canActivate:[AnonGuard],  component: LoginComponent},
      {path: 'signup',canActivate:[AnonGuard], component: SignupComponent},
      {path:'home',canActivate:[AuthGuard,NonadminGuard],component:HomeComponent},
      {path:'adminpage',canActivate:[AuthGuard,AdminGuard],component:AdminPageComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
