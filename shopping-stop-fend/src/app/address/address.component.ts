import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addArr: any = [];
  newAdd: any = {};
  addformVisible = false;
  selectedAddress: any;
  constructor(private productService : ProductService,
    private alertService:AlertService,
    private router: Router){
   
  }
  ngOnInit() {
    this.getAddress();
  }

  toggleEditMode(singleAdd: any,event:Event): void {
    this.addArr.forEach((element:any) => {
      if(singleAdd._id !== element._id){
        element.isEditMode = false;
      }
    });
    singleAdd.isEditMode = !singleAdd.isEditMode;
    event.stopPropagation();
  }
  
  saveAddress() {
    this.productService.addAddress(this.newAdd).subscribe(data=>{
      this.toggleAddNewBtn();
      this.newAdd = {};
      this.getAddress();
      this.alertService.success("Address added successfully");
      this.selectAddress(this.addArr[0])

    })
  }
  
  getAddress() {
    this.productService.getAddress().subscribe(
      (data: any) => {
        this.addArr = [];
        data.map((res: any) =>{
          let singleUser = {full_name:res.full_name, phone_number:res.phone_number,
            address_line1:res.address_line1,address_line2:res.address_line2,city: res.city,
            state: res.state , pincode: res.pincode,isEditMode: false,_id:res._id};
          this.addArr.push(singleUser);
        })
        this.selectedAddress = this.addArr[0]
      },
      (error) => {
        this.alertService.error("Error fetching user data:");
      }
    );
  }
  saveEditedAddress(singleAdd:any){
    this.productService.editAddress(singleAdd).subscribe((data:any) =>{
      this.alertService.success("Address Updated successfully")
      singleAdd.isEditMode=false;
    })
  }
  toggleAddNewBtn(){
      this.addformVisible = !this.addformVisible;
  }
  deleteAddress(singleAdd:any){
    this.productService.deleteAddress(singleAdd._id).subscribe((res:any) =>{
      this.alertService.error(res?.msg)
      this.getAddress();
      this.selectAddress(this.addArr[0])
    })
  }
  selectAddress(singleAddress: any): void {   
    this.selectedAddress = singleAddress;
  }
  proceed() {
    this.router.navigate(['customerpage', 'payment',this.selectedAddress?._id])
  }
}
