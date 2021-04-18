import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { HeaderObjLink } from '../header-hamburger/headerObj';
const AUTH = 'auth-user-info_';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck, AfterViewInit {



  showImage = false;
  loaded = false;
  mobile = false;
  linkArray = new Array<HeaderObjLink>();
  mobileWidth = 991;

  constructor(

  ) {
    this.checkWin();
    this.popolaArray();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
      this.checkWin();
    }, 100);
  }
  ngDoCheck(): void {
    this.checkWin();

  }
  checkWin() {

    const q = window.innerWidth;
    if (q <= this.mobileWidth) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }

  }

  popolaArray() {
    this.linkArray = [];
    let link;
    link = new HeaderObjLink('asd', '/cose-cv-local', 'cose-cv-local');
    this.linkArray.push(link);
    link = new HeaderObjLink('asd', '/normativa', 'normativa');
    this.linkArray.push(link);
  }



  ngOnInit(): void {

  }

}
