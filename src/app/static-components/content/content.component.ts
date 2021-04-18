import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
    public router: Router,
    ) { }

  ngOnInit(): void {
    /* this.linguaSer.setDefLang(); */
  }
  logOut() {
    this.router.navigate(['/']);
  }
}
