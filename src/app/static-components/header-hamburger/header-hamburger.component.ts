import { AfterViewInit, Component, DoCheck, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { HeaderObjLink } from './headerObj';

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

  // linkArray = [];
  header;
  sticky;
  showImage = false;

  windowsWidth;
  selectOption: string;

  loaded = false;
  mobile = false;

  stickyMob: any;
  headMob: HTMLElement;

  constructor(
    private el: ElementRef
  ) {
    this.checkWin();
    this.changeHeader();

  }
  configure() {
    (this.el.nativeElement as HTMLElement).style.setProperty('--secondaryColor', this.secondaryColor);
    (this.el.nativeElement as HTMLElement).style.setProperty('--primaryColor', this.primaryColor);
    console.log('logo:', this.logo);
    /*     @Input() primaryColor = '#0066CC';
        @Input() secondaryColor = '#f0f8ff'; */
  }


  getArray() {
    this.linkArray = [];
    let link;
    link = new HeaderObjLink('asd', '/cose-cv-local', 'cose-cv-local');
    this.linkArray.push(link);
    link = new HeaderObjLink('asd', '/normativa', 'normativa');
    this.linkArray.push(link);
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
        this.showImage = false;
      } else {
        if ($('.it-header-wrapper')) {
          const allListElements = $('.it-header-wrapper');
          allListElements.removeClass('mobileFixed');
          this.showImage = false;
        }

        if (window.pageYOffset > this.sticky) {
          $('#myHeaderHamb').addClass('sticky');
          this.showImage = true;
        } else {
          $('#myHeaderHamb').removeClass('sticky');
          this.showImage = false;
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


}

