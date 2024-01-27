import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSubject = new BehaviorSubject<string>('');
  search$: any = this.searchSubject.asObservable();

  constructor() { }

  get searchValue(): any {
    return this.search$;
  }
  set searchValue(searchvalue: string) {
    this.searchSubject.next(searchvalue);
  }
}
