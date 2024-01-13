import { Component } from '@angular/core';
import { AuthUtils } from '../utility/auth-utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    logout(){
      AuthUtils.removeAuthToken();
      AuthUtils.removeUserType();
      location.reload()
    }
}
