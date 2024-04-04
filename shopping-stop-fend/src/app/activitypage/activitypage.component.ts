import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activitypage',
  templateUrl: './activitypage.component.html',
  styleUrls: ['./activitypage.component.scss']
})
export class ActivitypageComponent {
userId: any;
activity: any = {
  activities: [] // Initialize activities as an empty array
};
constructor(private userService: UserService, private route: ActivatedRoute) {
  console.log("activitypage");
  this.route.params.subscribe((params: any) => {
    this.userId = params['userId'];
    console.log("userId", this.userId);
    this.getActivity();
  });
}
getActivity() {
   this.userService.getActivity(this.userId).subscribe((data) => {
    this.activity = data;
   })
 }
}
