import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';
import { HeaderObjLink } from '../header-hamburger/headerObj';
import infoGenerali from 'src/assets/files/infoGenerali.json';
import { LinguaService } from 'src/app/services/lingua.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck, AfterViewInit {


  infoGenerali;

  showImage = false;
  loaded = false;
  mobile = false;
  linkArray = new Array<HeaderObjLink>();
  mobileWidth = 991;

  constructor(
    public downloadService: DownloadService,
    public linguaService: LinguaService

  ) {
    this.popolaInfo();
    this.checkWin();
    this.popolaArray();
  }

  popolaInfo() {
    const json = infoGenerali.lingue[this.linguaService.getLingua()].value;
    this.infoGenerali = json;
    console.log(this.infoGenerali);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
      this.checkWin();
    }, 100);
  }
  ngDoCheck(): void {
    this.checkWin();
    this.infoGenerali = infoGenerali.lingue[this.linguaService.getLingua()].value;
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
    link = new HeaderObjLink(this.infoGenerali.contattiH, 'contatti', 'contatti');
    this.linkArray.push(link);
    link = new HeaderObjLink(this.infoGenerali.anagraficaH, 'anagrafica', 'anagrafica');
    this.linkArray.push(link);
    link = new HeaderObjLink(this.infoGenerali.istruzioneH, 'educazione', 'educazione');
    this.linkArray.push(link);
    link = new HeaderObjLink(this.infoGenerali.esperienzeH, 'esperienza', 'esperienza');
    this.linkArray.push(link);
    link = new HeaderObjLink(this.infoGenerali.competenzeH, 'competenze', 'competenze');
    this.linkArray.push(link);

  }



  ngOnInit(): void {

  }

  goToLink(link) {
    switch (link) {
      case 'linkedin':
        const url = this.infoGenerali.linkedin;
        window.open(url, '_blank');
        break;

      default:
        break;
    }
  }

  download() {
    this.downloadService.downloadCurriculum(this.infoGenerali.curriculum);
  }

  getCurrentLingua(): string {
    return this.linguaService.getLinguaUpperCase();
  }

  setLingua(lingua) {
    this.linguaService.setLingua(lingua);
    sessionStorage.setItem('lingua', this.linguaService.getLingua());
  }

}
