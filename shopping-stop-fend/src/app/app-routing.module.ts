import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonGuard } from './guards/anon.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {path: '', component: SignupComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
