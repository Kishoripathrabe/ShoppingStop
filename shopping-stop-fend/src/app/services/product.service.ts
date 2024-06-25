import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthUtils } from '../utility/auth-utils';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://shoppingstopbackend.onrender.com/api/admin'; // Replace with your actual API endpoint
  private apiUserUrl = 'https://shoppingstopbackend.onrender.com/api/user';
     cartCount: BehaviorSubject<any> = new BehaviorSubject<any>(0);

  constructor(private http: HttpClient) {}

  addProduct(product: any): Observable<any> {
    let options =  { headers:  this.getAuthHeaders()}
    return this.http.post<any>(`${this.apiUrl}/add/product`, product, options);
  }
  getAuthHeaders() {
    return {authorization: `bearer ${AuthUtils.getAuthToken()}`};
  }
  getAllProducts() {
    return this.http.get(this.apiUrl + "/get/all/products",{headers : this.getAuthHeaders() });
  }
  editProduct(Editedproduct : any){
    return this.http.patch(this.apiUrl + `/edit/product`,{value:Editedproduct}, {headers: this.getAuthHeaders()});
  }
  deleteProduct(id : any) {
    return this.http.request('delete',this.apiUrl + `/delete/product/${id}`,{ headers: this.getAuthHeaders()} )
  }

  getAllProductsCustumer() {
    return this.http.get(this.apiUserUrl + "/get/all/products",{headers : this.getAuthHeaders() });
  }
  getSearchItem(searchvalue: any,currentPage: any, pageSize: any){
    const params = {searchvalue,currentPage, pageSize};
    return this.http.get(this.apiUserUrl + "/get/search/item",{ params,headers: this.getAuthHeaders() });
  }
  getSearchedCount(searchvalue: any) {
    const params = {searchvalue};
    return this.http.get(this.apiUserUrl + "/get/search/count", { params,headers: this.getAuthHeaders() });
  }
  addToWishlist(id: any) {
    return this.http.patch(this.apiUserUrl+"/add/wishlist",{pid:id},{headers : this.getAuthHeaders() });
  }
  getWishlist(){
    return this.http.get(this.apiUserUrl + "/get/wishlist",{headers : this.getAuthHeaders() });
  }
  addToCart(id : any) {
    return this.http.patch(this.apiUserUrl+"/add/tocart",{pid:id},{headers : this.getAuthHeaders() })
  }
  showAddToCart(){
    return this.http.get(this.apiUserUrl + "/get/cart/products",{headers : this.getAuthHeaders() })
  }
  decreasequantity(productId: any){
    return this.http.patch(this.apiUserUrl + "/decrease/product/quantity",{prodId: productId},{headers : this.getAuthHeaders() })
  }
  increasequantity(productId : any) {
    return this.http.patch(this.apiUserUrl + "/increase/product/quantity",{prodId: productId},{headers : this.getAuthHeaders() })
  }
  deleteFromCart(productId : any) {
    return this.http.patch(this.apiUserUrl + "/delete/product/cart",{prodId: productId},{headers : this.getAuthHeaders() })
  }
  getProductById(id: any) {
    return this.http.get(this.apiUserUrl + "/get/productbyid/"+ id,{headers : this.getAuthHeaders() })
  }
  addAddress(address: any) {
    return this.http.post(this.apiUserUrl + "/create/address", {addressdetails: address},{headers : this.getAuthHeaders() } );
  }
  getAddress() {
    return this.http.get(this.apiUserUrl + "/get/address",{headers : this.getAuthHeaders() })
  }
  editAddress(users: any) {
    return this.http.patch(this.apiUserUrl + "/edit/address",{editUserAddress: users},{headers : this.getAuthHeaders() })
  }

  deleteAddress(addId:any){
    return this.http.patch(this.apiUserUrl + "/delete/address",{addId},{headers : this.getAuthHeaders() })
  }
  getAddressById(addId: any){
    return this.http.get(this.apiUserUrl + "/get/addressbyid/" + addId,{headers : this.getAuthHeaders() })
  }
  placeOrder(order: any){
    return this.http.post(this.apiUserUrl + "/place/order", { placedOrder: order},{headers : this.getAuthHeaders() } );
  }
  getOrderHistory(){
    return this.http.get(this.apiUserUrl + "/get/orderhistory",{headers : this.getAuthHeaders() })
  }
  inc(){
    let data=this.cartCount.value+1;
    this.cartCount.next(data);
  }
}

