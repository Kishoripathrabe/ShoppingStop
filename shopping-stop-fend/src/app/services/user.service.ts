import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUtils } from '../utility/auth-utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://shoppingstopbackend.onrender.com/api/admin'; // Replace with your actual API endpoint
  private apiUserUrl = 'https://shoppingstopbackend.onrender.com/api/user';
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
  addActivity( msg: any) {
    return this.http.post(this.apiUserUrl + "/add/activity", {data:{}, msg}, {headers : this.getAuthHeaders() } )
  }
  getActivity(userId: any) {
    console.log("getctivity caled");
    return this.http.get(this.apiUrl + "/get/activity/" + userId,{headers : this.getAuthHeaders() })
  }
}
