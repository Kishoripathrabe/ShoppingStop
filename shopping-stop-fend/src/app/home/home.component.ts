import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../search.service';
import { AlertService } from '../services/alert.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  products: any ;
  wishlistArr: any;
  productCount:any=0;
  pageSize = 4;
  currentPage = 1;
  productsLoaded: any;
  searchvalue:any='';
  private searchSubscription: Subscription;

  constructor( private alert: AlertService, private productService: ProductService,
    private router:Router , private searchService: SearchService) {
      this.searchSubscription = this.searchService.searchValue.subscribe((value: any) => {
        this.searchvalue = value;
        this.updateSearchResults();
      });
    this.productService.getSearchedCount(this.searchvalue).subscribe((res:any) =>{
      this.productCount = res.data;
      this.loadSearchedProducts({page:0});
    })
    this.productService.showAddToCart().subscribe((data:any)=>{
      this.productService.cartCount.next(data.length)

    })
  }
  loadSearchedProducts(event:any){
    this.currentPage = event?.page + 1;
      this.productService.getSearchItem(this.searchvalue, this.currentPage,this.pageSize).subscribe((data: any) =>{
        this.products = data;
      })
    }
    updateSearchResults() {
      this.resetPageData();
      this.productService.getSearchedCount(this.searchvalue).subscribe((res: any) =>{
          this.productCount = res.data;
          this.loadSearchedProducts({page:0})
          console.log(this.productCount);
        })
      }

  resetPageData(){
    this.pageSize = 4;
    this.currentPage = 1;
  }
  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
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
            let c= this.productService.cartCount.value+1;
            this.productService.cartCount.next(c);          }
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
