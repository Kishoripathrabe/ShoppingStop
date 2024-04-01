import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class AlertService {
  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string, duration = 3500) {
    this.snackBar.open(message, '', {duration, panelClass: ['green-snackbar'],
  });
  }

  error(message: string, duration = 3500) {
    this.snackBar.open(message, '', {duration, panelClass: ['red-snackbar'],});
  }

  message(message: string, duration = 3500) {
    this.snackBar.open(message, '', {duration});
  }
}
