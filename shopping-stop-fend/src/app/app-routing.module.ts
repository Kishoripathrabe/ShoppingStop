import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CartComponent } from './cart/cart.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { AdminGuard } from './guards/admin.guard';
import { AnonGuard } from './guards/anon.guard';
import { AuthGuard } from './guards/auth.guard';
import { NonadminGuard } from './guards/nonadmin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ProductMgmComponent } from './product-mgm/product-mgm.component';
import { SignupComponent } from './signup/signup.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { UserMgmComponent } from './user-mgm/user-mgm.component';
import { WishlistComponent } from './wishlist/wishlist.component';
const routes: Routes = [
  {
    path: '', 
    children: [
      {path: '', canActivate:[AnonGuard],  component: LoginComponent},
      {path: 'signup',canActivate:[AnonGuard], component: SignupComponent},
      {path:'customerpage',canActivate:[AuthGuard,NonadminGuard],component:CustomerPageComponent,children:[
        { path: 'home', component: HomeComponent },
        { path: 'cart', component: CartComponent },
        { path: 'wishlist', component: WishlistComponent },
        { path: 'myaccount', component: MyAccountComponent },
        { path: '',redirectTo:"home",pathMatch:"full"},
        { path: 'singleproduct/:id', component: SingleproductComponent}

      ]},
      {path:'adminpage',canActivate:[AuthGuard,AdminGuard],component:AdminPageComponent,children:[
        { path: '', redirectTo: 'user-management', pathMatch: 'full' },
        { path: 'user-management', component: UserMgmComponent },
        { path: 'product-management', component: ProductMgmComponent }
      ]},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
