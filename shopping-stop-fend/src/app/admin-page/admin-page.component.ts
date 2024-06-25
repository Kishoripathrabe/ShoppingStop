import { Component } from '@angular/core';
import { AuthUtils } from '../utility/auth-utils';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
constructor(){

}
logout(){
    AuthUtils.removeAuthToken();
    AuthUtils.removeUserType();
    location.reload();
}
}
