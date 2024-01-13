import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: any ;
  wishlistArr: any;
  constructor( private alert: AlertService, private productService: ProductService ) {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getAllProductsCustumer().subscribe((res: any) => {
      console.log(res)
      this.products = res
      // this.products got products
      // this.productService.getWishlist().subscribe((wres) => {
      //   this.wishlistArr = wres;

      //   // this.products [{}{}{id}{}{}{}{}{}] this.wishlist [{}{id}{}{}]
      //   this.wishlistMatching();
      // });
    });
  }
  // wishlistMatching() {
  //   this.products.forEach((prod: any) => {
  //     this.wishlistArr.map((data: any) => {
  //       if (prod._id == data._id) {
  //         return (prod['inWishlist'] = true);
  //       } else {
  //         return false;
  //       }
  //     });
  //   });
  // }
  addToCart(id: any) {
    console.log(id);
  }
  addToWishlist(id: any) {
    console.log(id);
    this.productService.addToWishlist(id).subscribe((data: any) => {
      this.products = this.products.map((res: any) => {
        if (res._id == id) {
          res['inWishlist'] = data.isAdded;
        }
        return res;
      });
      this.alert.success(data?.msg);
    });
  }
}
