import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  products:any=[]
   ngOnInit() {
   
} 
constructor(private productService:ProductService,private alert:AlertService){
this.getAllWishlist();
}

getAllWishlist(){
  this.productService.getWishlist().subscribe(data=>{
    console.log(data)
    this.products = data;
  })
}

addToCart(id: any){
  console.log(id);

}
addToWishlist(id : any){
  console.log(id);
  this.productService.addToWishlist(id).subscribe((data:any) => {
    this.alert.success(data?.msg)
    this.getAllWishlist()
  })
}

}
