import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoodEast';
  ngOnInit():void{
    AOS.init();
  }
  
  currentRoute: string = '';

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
 
  
}
