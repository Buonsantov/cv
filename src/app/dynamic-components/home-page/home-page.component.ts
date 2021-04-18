import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visualizzaContatti() {
    const q = window.innerWidth;
    if (q <= 991) {
      return true;
    }
    return false;
  }

}
