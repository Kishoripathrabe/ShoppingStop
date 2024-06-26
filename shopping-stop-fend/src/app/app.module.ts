import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from './services/alert.service';
import { HomeComponent } from './home/home.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserMgmComponent } from './user-mgm/user-mgm.component';
import { ProductMgmComponent } from './product-mgm/product-mgm.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { TruncatePipe } from './truncate.pipe';
import { HeaderComponent } from './header/header.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { MatRadioModule } from '@angular/material/radio';
import { OrderedComponent } from './ordered/ordered.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { ActivitypageComponent } from './activitypage/activitypage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminPageComponent,
    UserMgmComponent,
    ProductMgmComponent,
    CustomerPageComponent,
    TruncatePipe,
    HeaderComponent,
    WishlistComponent,
    CartComponent,
    MyAccountComponent,
    SingleproductComponent,
    AddressComponent,
    PaymentComponent,
    OrderedComponent,
    OrderHistoryComponent,
    EdituserComponent,
    ActivitypageComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatRippleModule,
    MatProgressBarModule,
    MatRadioModule,
    DataViewModule,
    PaginatorModule
    ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
