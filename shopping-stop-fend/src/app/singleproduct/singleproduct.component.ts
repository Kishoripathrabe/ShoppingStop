import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit{
  productId: any;
  product: any;
  constructor(private route: ActivatedRoute,
    private productService: ProductService){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.getProductDetails();
    });
  }
  getProductDetails(): void {
    this.productService.getAllProductsCustumer().subscribe(
      (data: any) => {
        this.product = data.find((product : any) => product._id == this.productId);
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
}
