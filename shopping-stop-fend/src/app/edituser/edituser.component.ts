import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent {
  userId: any;
  user: any;
  orderArr: any;
  constructor(private userService: UserService, private route: ActivatedRoute,private alertService:AlertService){
    this.route.params.subscribe((params: any) => {
      this.userId = params['userId'];
      console.log("userId", this.userId);
      this.getUser();
    });
  }
  getUser() {
    this.userService.getCustomerInfo(this.userId).subscribe((data: any) => {
      console.log("user", data);
      this.user = data.user;
      this.orderArr = data.orderArr;
    })
  }



  updateOrderStatus(orderId: any, event: any): void {
    let newStatus = event?.target?.value;
    if(newStatus == "default"){
        return;
    }
    this.userService.updateOrderStatus(orderId, newStatus).subscribe((data:any) => {
      this.alertService.success(data?.msg);
      this.userService.addActivity(data?.msg).subscribe();
      this.getUser();
    });
  }
}