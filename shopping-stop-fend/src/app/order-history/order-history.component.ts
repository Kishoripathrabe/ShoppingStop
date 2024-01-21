import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: any; 
  isopen = false;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getOrderHistory();
  }

  getOrderHistory(): void {
    this.productService.getOrderHistory().subscribe((data: any) => {
      this.orders = data; 
      this.orders.map((res:any) =>{
        res["isopen"] = this.isopen;
      })
    });
  }
  orderDetails(orderId: any) {
    this.orders.map((res:any) =>{
        if(res._id == orderId){
           this.isopen = !this.isopen; 
           res.isopen = this.isopen; 
        }
    })
  }
}
