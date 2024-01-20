import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  addressId: any;
  selectedAddress: any;
  name: any;
  deliverTo: any;
  products: any;
  totalValue = 0;
  order:any = {};
  selectedPaymentMethod: any;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router){
    this.productService.showAddToCart().subscribe((cart:any)=> {
      this.products = cart;
      this.getTotal();
      this.order['cart'] =  cart;
    }); 
  }
  
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.addressId = params['addid'];
      this.getAddressById();
    });
  }
  getTotal() {
    this.totalValue = this.products?.reduce((total:any, item:any) => {
      return total + (item?.quantity * item?.orgProduct?.price)
    }, 0);
  }

  getAddressById() {
    this.productService.getAddressById(this.addressId).subscribe( (address: any) =>{
      this.selectedAddress = {
        name : address.full_name,
        address1: address.address_line1,
        address2: address.address_line2,
        city: address.city,
        state: address.state, 
        pincode: address.pincode,
        mobileno: address.phone_number
      }
      this.order['address'] =  address;
    });
  }
  paymentMethodChange(value: string) {
    this.order['MOP'] =  value;
    console.log("placed order", this.order);
  }
  placeOrder() {
    this.productService.placeOrder(this.order).subscribe((res: any) =>{
      console.log(res);
      this.router.navigate(['customerpage','ordered']);
    });
  }

}
