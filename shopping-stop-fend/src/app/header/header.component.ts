import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { AuthUtils } from '../utility/auth-utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchvalue:any='';
  constructor(private searchService: SearchService){}

    logout(){
      AuthUtils.removeAuthToken();
      AuthUtils.removeUserType();
      location.reload()
    }
    
    onSearch(){
      this.searchService.searchValue = this.searchvalue;
    }
}
