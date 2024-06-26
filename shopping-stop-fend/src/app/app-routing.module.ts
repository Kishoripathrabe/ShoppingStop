import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CartComponent } from './cart/cart.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdminGuard } from './guards/admin.guard';
import { AnonGuard } from './guards/anon.guard';
import { AuthGuard } from './guards/auth.guard';
import { NonadminGuard } from './guards/nonadmin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderedComponent } from './ordered/ordered.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductMgmComponent } from './product-mgm/product-mgm.component';
import { SignupComponent } from './signup/signup.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { UserMgmComponent } from './user-mgm/user-mgm.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ActivitypageComponent } from './activitypage/activitypage.component';
const routes: Routes = [
  {
    path: '', 
    children: [
      {path: '', canActivate:[AnonGuard],  component: LoginComponent},
      {path: 'signup',canActivate:[AnonGuard], component: SignupComponent},
      {path:'customerpage',canActivate:[AuthGuard,NonadminGuard],component:CustomerPageComponent,children:[
        { path: 'home', component: HomeComponent },
        { path: 'cart', component: CartComponent },
        { path: 'address', component: AddressComponent},
        { path: 'payment/:addid', component: PaymentComponent},
        { path: 'ordered', component: OrderedComponent},
        { path: 'wishlist', component: WishlistComponent },
        { path: 'myaccount', component: MyAccountComponent },
        { path: 'myorders', component: OrderHistoryComponent},
        { path: 'singleproduct/:id', component: SingleproductComponent},
        { path: '',redirectTo:"home",pathMatch:"full"},
      ]},
      {path:'adminpage',canActivate:[AuthGuard,AdminGuard],component:AdminPageComponent,children:[
        { path: '', redirectTo: 'user-management', pathMatch: 'full' },
        { path: 'user-management', component: UserMgmComponent },
        { path: 'edit-user/:userId' , component: EdituserComponent},
        { path: 'product-management', component: ProductMgmComponent },
        { path: 'activitypage/:userId', component: ActivitypageComponent}
      ]},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
