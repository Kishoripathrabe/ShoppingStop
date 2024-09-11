import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private inactivityTime = 2000;
  private timeoutId: any;
  public inactivityFlag$ = new Subject<boolean>();
  constructor(private ngZone: NgZone) {
  }

  public setupInactivityTimer(): void {
    this.resetTimer();
    this.addListeners()
  }

  addListeners() {
    document.addEventListener('mousemove', this.resetTimer);
    document.addEventListener('keydown', this.resetTimer);
    document.addEventListener('click', this.resetTimer);
    document.addEventListener('scroll', this.resetTimer);
  }
  removeListeners() {
    document.removeEventListener('mousemove', this.resetTimer);
    document.removeEventListener('keydown', this.resetTimer);
    document.removeEventListener('click', this.resetTimer);
    document.removeEventListener('scroll', this.resetTimer);
  }


  private resetTimer(): void {
    this.clearOldTimer?this.clearOldTimer():'';
    this.timeoutId = setTimeout(() => this.inactivityHandler?this.inactivityHandler():'', this.inactivityTime);
    this.inactivityFlag$?this.inactivityFlag$.next(false):'';
  }

  private inactivityHandler(): void {
      this.clearOldTimer()
      this.removeListeners();
      this.inactivityFlag$.next(true);
  }

  clearOldTimer() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

}