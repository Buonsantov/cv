import { Component, DoCheck, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';
import { LinguaService } from 'src/app/services/lingua.service';
import infoGenerali from 'src/assets/files/infoGenerali.json';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit, DoCheck {
  infoGenerali: any;
  mobile: boolean;

  constructor(
    public downloadService: DownloadService,
    public linguaService: LinguaService) {
    this.popolaInfo();
  }
  ngDoCheck(): void {
    this.infoGenerali = infoGenerali.lingue[this.linguaService.getLingua()].value;
    this.checkWin();
  }

  checkWin() {

    const q = window.innerWidth;
    if (q <= 676) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }

  }

  ngOnInit(): void {
  }

  popolaInfo() {
    const json = infoGenerali.lingue[this.linguaService.getLingua()].value;
    this.infoGenerali = json;
    console.log(this.infoGenerali);
  }
  download() {
    this.downloadService.downloadCurriculum(this.infoGenerali.curriculum);
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
}
