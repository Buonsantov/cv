import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';
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
    public downloadService: DownloadService,

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
    link = new HeaderObjLink('Contatti', 'contatti', 'contatti');
    this.linkArray.push(link);
    link = new HeaderObjLink('Anagrafica', 'anagrafica', 'anagrafica');
    this.linkArray.push(link);
    link = new HeaderObjLink('Istruzione', 'educazione', 'educazione');
    this.linkArray.push(link);
    link = new HeaderObjLink('Esperienze', 'esperienza', 'esperienza');
    this.linkArray.push(link);
    link = new HeaderObjLink('Competenze', 'competenze', 'competenze');
    this.linkArray.push(link);

  }



  ngOnInit(): void {

  }

  goToLink(link) {
    switch (link) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/vito-buonsanto-83043b5b/', '_blank');
        break;

      default:
        break;
    }
  }

  download() {
    this.downloadService.downloadCurriculum();
  }

}
