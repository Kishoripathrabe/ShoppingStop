import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalValue=0;
  cartItems: any;
  constructor(private productService : ProductService){}
  ngOnInit(): void {
    this.productService.showAddToCart().subscribe((data) => {
      this.cartItems = data;
    });
    this.getTotal();

  }
  getTotal() {
    this.totalValue = this.cartItems?.reduce((total:any, item:any) => 
    {
      return total + (item?.quantity * item?.orgProduct?.price)
    }, 0);
  }
  decrement(item :any) {
    if(item.quantity<=1){
      return 
    }else{
      this.productService.decreasequantity(item._id).subscribe(res =>{
    item.quantity--;
    })
    }
  }
  increment(prodId :any) {
    this.productService.increasequantity(prodId).subscribe(res =>{
      console.log(res);
    this.cartItems = this.cartItems.map((res:any) => {
      if(prodId == res._id){
        res.quantity += 1;
      }
      return res;
    })
    this.getTotal();
    })
  }
  deleteFromCart(prodId:any){
    this.productService.deleteFromCart(prodId).subscribe(res =>{
      console.log(res);
    this.cartItems = this.cartItems.filter((data:any) => {
      return (data.orgProduct._id!=prodId);
    })
    this.getTotal();
    })
  }
}
