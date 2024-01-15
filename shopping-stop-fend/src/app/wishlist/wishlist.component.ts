import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.getAllWishlist();
} 
constructor(private productService:ProductService,private alert:AlertService,private router:Router){
this.getAllWishlist();
}

getAllWishlist(){
  this.productService.getWishlist().subscribe(data=>{
    this.products = data;
    console.log("🚀 ~ WishlistComponent ~ this.productService.getWishlist ~ data:", data)
  })
}

addToCart(id: any){
  this.productService.addToCart(id).subscribe((data:any) =>{
    this.alert.success(data?.msg);
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
addToWishlist(id : any){
  this.productService.addToWishlist(id).subscribe((data:any) => {
    this.alert.success(data?.msg);
    this.products=this.products.filter((res:any)=>{
        return (res._id!==id)
    })
  })
}

}
