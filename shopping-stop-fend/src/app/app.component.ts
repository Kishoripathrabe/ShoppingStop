import { Component } from '@angular/core';
import { debounceTime, Subscription, take } from 'rxjs';
import { TimerService } from './services/timer.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthUtils } from './utility/auth-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  subscription!: Subscription;
  showinactivityFlag = false;
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.subscription = this.timerService.inactivityFlag$.pipe(debounceTime(500)).subscribe((show) => {
      this.showinactivityFlag = show;
    });
  }

contMe(){
  this.timerService.setupInactivityTimer()
}
logOutme(){
  AuthUtils.removeAuthToken();
  this.timerService.clearOldTimer()
  AuthUtils.removeUserType();
  location.reload();
}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
