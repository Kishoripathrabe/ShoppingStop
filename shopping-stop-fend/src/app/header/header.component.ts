import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { AuthUtils } from '../utility/auth-utils';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  count = 0;
  searchvalue:any='';
  constructor(private searchService: SearchService,private productService: ProductService){
    this.productService.cartCount.subscribe(data=>{
      this.count = data;
    })
  }

    logout(){
      AuthUtils.removeAuthToken();
      AuthUtils.removeUserType();
      location.reload();
    }
    
    onSearch(){
      this.searchService.searchValue = this.searchvalue;
    }
}
