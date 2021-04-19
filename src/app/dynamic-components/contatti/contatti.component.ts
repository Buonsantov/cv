import { Component, DoCheck, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';
import infoGenerali from 'src/assets/files/infoGenerali.json';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit, DoCheck {
  infoGenerali: any;
  mobile: boolean;

  constructor(public downloadService: DownloadService) {
    this.popolaInfo();
  }
  ngDoCheck(): void {
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
    const json = infoGenerali.value;
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
