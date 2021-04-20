import { AfterViewInit, Component, DoCheck, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { HeaderObjLink } from './headerObj';
import infoGenerali from 'src/assets/files/infoGenerali.json';
@Component({
  selector: 'app-header-hamburger',
  templateUrl: './header-hamburger.component.html',
  styleUrls: ['./header-hamburger.component.css']
})
export class HeaderHamburgerComponent implements OnInit, DoCheck, AfterViewInit {

  @Input() title: string;
  @Input() logo: string;
  @Input() linkArray: Array<HeaderObjLink>;
  @Input() mobileWidth: number;
  @Input() primaryColor: string;
  @Input() secondaryColor: string;
  @Input() type: string;

  // linkArray = [];
  header;
  sticky;
  show = false;

  tipoLink = 'router';

  windowsWidth;
  selectOption: string;
  selectDiv: string;

  loaded = false;
  mobile = false;

  stickyMob: any;
  headMob: HTMLElement;
  infoGenerali: any;

  altezze = [];

  constructor(
    private el: ElementRef
  ) {
    this.popolaInfo();
    this.checkWin();
    this.changeHeader();
    this.configure();

  }
  configure() {
    if (this.type) {
      this.tipoLink = this.type;
    }
    (this.el.nativeElement as HTMLElement).style.setProperty('--secondaryColor', this.secondaryColor);
    (this.el.nativeElement as HTMLElement).style.setProperty('--primaryColor', this.primaryColor);
    console.log('logo:', this.logo);
    /*     @Input() primaryColor = '#0066CC';
        @Input() secondaryColor = '#f0f8ff'; */
  }

  popolaInfo() {
    const json = infoGenerali.value;
    this.infoGenerali = json;
    console.log(this.infoGenerali);
  }


  getArray() {

    return this.linkArray;

  }



  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
      this.configure();
      this.checkWin();
    }, 100);
  }
  ngDoCheck(): void {
    this.checkLocation();
    this.checkWin();
    // this.detectRoteateScreen();
  }

  checkLocation() {
    const location = window.location.pathname.slice(1, window.location.pathname.length);
    this.selectOption = (location);
  }
  detectRoteateScreen() {
    window.addEventListener('orientationchange', (event) => {
      window.location.reload();
    });
  }
  checkWin() {
    if (this.loaded) {
      const q = window.innerWidth;
      if (q <= this.mobileWidth) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    }
  }
  changeHeader() {
    if (this.loaded) {
      const q = window.innerWidth;
      if (q <= this.mobileWidth) {

        const allListElements = $('.it-header-wrapper');
        allListElements.addClass('mobileFixed');
        // console.log('position: ', allListElements);
        this.show = false;
      } else {
        if ($('.it-header-wrapper')) {
          const allListElements = $('.it-header-wrapper');
          allListElements.removeClass('mobileFixed');
          this.show = false;
        }

        if (window.pageYOffset > this.sticky) {
          $('#myHeaderHamb').addClass('sticky');
          this.show = true;
        } else {
          $('#myHeaderHamb').removeClass('sticky');
          this.show = false;
        }
      }
    }
  }
  ngOnInit(): void {
    this.headMob = document.getElementById('mobileHeader');
    this.stickyMob = this.headMob.offsetTop;
    this.header = document.getElementById('myHeaderHamb');
    this.sticky = this.header.offsetTop;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.changeHeader();
  }





  openMenu() {
    const navBar = $('.navbar .navbar-collapsable .menu-wrapper');
    console.log(navBar);
    navBar.css('animation-name', 'openNav');
    navBar.css('animation-duration', '0.3s');
    $('#navHamburger').addClass('expanded');
    $('#navHamburger').addClass('display');
    $('#overlay').addClass('display');
  }
  closeMenu() {

    const navBar = $('.navbar .navbar-collapsable .menu-wrapper');
    console.log(navBar);
    navBar.css('animation-name', 'closeNav');
    navBar.css('animation-duration', '0.3s');

    setTimeout(() => {
      $('#navHamburger').removeClass('expanded');
      $('#navHamburger').removeClass('display');
    }, 300);

  }

  linkSelect(link) {
    if (window.location.pathname === link) {
      return true;
    } else { return false; }
  }


  calculateDiv() {
    this.altezze = [];

    this.linkArray.forEach(element => {
      const box = document.getElementById(element.link + 'Component');
      const height = box.offsetTop;
      this.altezze.push(height);
    });
  }

  divSelect(link) {
    this.selectDiv = '';



    const box = document.getElementById(link + 'Component');
    if (box) {
      const width = box.offsetWidth;
      const height = box.offsetTop;

      let div = null;
      for (let index = 0; index < this.linkArray.length; index++) {
        if (this.linkArray[index].link === link) {
          div = index;
        }
      }

      let hPage = document.documentElement.scrollTop || document.body.scrollTop;
      hPage += 150;
      if (div < this.linkArray.length - 1) {

        const divSucc = this.altezze[div + 1];
        if (hPage >= height && hPage < divSucc) {
          return true;
        } else {
          return false;
        }

      }
      return false;
    }
    return false;
  }
  goToDiv(divID) {
    this.selectDiv = '';

    let move = 180;
    if (this.mobile) {
      move = 100;
    }
    setTimeout(() => {
      const idElem = '#' + divID;
      $([document.documentElement, document.body]).animate({
        scrollTop: $(idElem).offset().top - move
      }, 100);
      return false;
    }, 50);
  }



  checkViewMenu(link) {

    if (this.mobile) {
      return true;
    }
    if (!this.mobile && link === 'contatti') {
      return false;
    }
    return true;

  }


}

