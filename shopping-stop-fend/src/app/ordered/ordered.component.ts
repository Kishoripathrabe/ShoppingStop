import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.scss']
})
export class OrderedComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['customerpage','home']); 
    }, 4000); 
  }
  
}
