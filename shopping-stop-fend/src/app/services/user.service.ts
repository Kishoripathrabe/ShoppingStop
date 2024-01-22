import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUtils } from '../utility/auth-utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/admin'; // Replace with your actual API endpoint
  private apiUserUrl = 'http://localhost:5000/api/user';
  constructor(private http: HttpClient) {}


  getAuthHeaders() {
    return {authorization: `bearer ${AuthUtils.getAuthToken()}`};
  }

  fetchMe() {
    return this.http.get(this.apiUserUrl + "/get/fetchme",{headers : this.getAuthHeaders() })
  }
  updateMe(data: any){
    return this.http.patch(this.apiUserUrl + "/update/me",{updatedMe:data},{headers : this.getAuthHeaders() })

  }
  getCustomerData() {
    return this.http.get(this.apiUrl + "/get/customer/data",{headers : this.getAuthHeaders() })
  }
  getCustomerInfo(userId : any) {
    return this.http.get(this.apiUrl + "/get/customer/info/" + userId,{headers : this.getAuthHeaders() })
  }
  updateOrderStatus(orderId: any,orderStatus: any){
    return this.http.patch(this.apiUrl + "/update/orderstatus",{orderId,orderStatus },{headers : this.getAuthHeaders() })

  }
}
