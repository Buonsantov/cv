import { Component, DoCheck, OnInit } from '@angular/core';
import { LinguaService } from 'src/app/services/lingua.service';
import educazione from 'src/assets/files/educazione.json';

@Component({
  selector: 'app-educazione',
  templateUrl: './educazione.component.html',
  styleUrls: ['./educazione.component.css']
})
export class EducazioneComponent implements OnInit, DoCheck {

  istruzioneModello;
  info: any;

  constructor(
    public linguaService: LinguaService,
  ) {
    const json = educazione.lingue[this.linguaService.getLingua()].value;
    this.istruzioneModello = json;
    console.log(this.istruzioneModello);
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.istruzioneModello = educazione.lingue[this.linguaService.getLingua()].value;
  }


  selezionaInfo(n) {
    this.info = n;
  }

}
