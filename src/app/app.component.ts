import { Component, DoCheck, ElementRef, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'curriculum-h';

  subscription: Subscription;
  mybutton: HTMLElement;
  constructor(
    private el: ElementRef,
    private router: Router) {
    // controlla se fai refresh page
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;

        console.log('benvenuto');

      }
    });
  }
  ngDoCheck(): void {

  }

  ngOnInit() {

  }

  topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

