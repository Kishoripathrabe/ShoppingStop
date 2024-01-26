import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  productCount:any=0;
  pageSize = 4;
  currentPage = 1;
  productsLoaded: any;
  constructor( private alert: AlertService, private productService: ProductService,private router:Router ) {
    this.productService.getProductsCount().subscribe((res:any) =>{
      this.productCount = res.data;
      this.loadProducts();
    })
  }
  
  loadProducts(): void {
    this.productService.getLoadedProducts(this.currentPage, this.pageSize)
      .subscribe((response: any) => {
        this.products = response;
      }, (error: any) => {
        console.error(error);
      });
  }

  onPageChange(event: any): void {
    this.currentPage = event.page + 1;
    this.loadProducts();
  }


  addToCart(id: any) {
    this.productService.addToCart(id).subscribe((data: any) =>{
      this.products = this.products.map((res: any) => {
        if (res._id == id) {
          if(data.incartalready){
            this.router.navigate(['customerpage', 'cart']);
          }else{
            res['inCart'] = true;
            this.alert.success(data?.msg);
          }
        }
        return res;
      });
    })

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
