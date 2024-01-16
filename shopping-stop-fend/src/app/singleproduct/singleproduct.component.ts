import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss'],
})
export class SingleproductComponent implements OnInit {
  productId: any;
  product: any;
  wishlistproducts: any;
  constructor(
    private route: ActivatedRoute,
    private alert: AlertService,
    private router: Router,
    private productService: ProductService
  ) {
    this.getProductDetails();
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.getProductDetails();
    });
  }
  getProductDetails(): void {
    this.productService.getAllProductsCustumer().subscribe(
      (data: any) => {
        this.product = data.find(
          (product: any) => product._id == this.productId
        );
        console.log(this.product);
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
    return this.product;
  }
  goBack(): void {
    window.history.back();
  }
  addToCart(id: any) {
    console.log(id);
    this.productService.addToCart(id).subscribe((data: any) => {
      if (data.incartalready) {
        this.router.navigate(['customerpage', 'cart']);
      } else {
        this.product['inCart'] = true;
      }
    });
  }

  addToWishlist(id: any) {
    this.productService.addToWishlist(id).subscribe((data: any) => {
      this.product['inWishlist'] = data.isAdded;
      this.alert.success(data?.msg);
    });
  }
}
