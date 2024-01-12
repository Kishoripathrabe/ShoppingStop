import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUtils } from '../utility/auth-utils';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/admin'; // Replace with your actual API endpoint

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
}
function Of(Editedproduct: any) {
  throw new Error('Function not implemented.');
}

