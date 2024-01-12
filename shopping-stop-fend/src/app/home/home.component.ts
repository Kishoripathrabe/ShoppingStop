import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  products: any ;
  constructor(private alert: AlertService, private productService: ProductService ) {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getAllProductsCustumer().subscribe((res) => {
      this.products = res;
      console.log(res);
    });
  }
  addToCart(id: any){
    console.log(id);

  }
  addToWishlist(id : any){
    console.log(id);
    this.productService.addToWishlist(id).subscribe((data:any) => {
      this.alert.success(data?.msg)
    })
  }

}
