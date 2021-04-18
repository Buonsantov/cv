import { Component, OnInit } from '@angular/core';
import anagraficaJson from 'src/assets/files/educazione.json';

@Component({
  selector: 'app-educazione',
  templateUrl: './educazione.component.html',
  styleUrls: ['./educazione.component.css']
})
export class EducazioneComponent implements OnInit {

  istruzioneModello;
  info: any;

  constructor() {
    const json = anagraficaJson.value;
    this.istruzioneModello = json;
    console.log(this.istruzioneModello);
  }

  ngOnInit(): void {
  }

  selezionaInfo(n) {
    this.info = n;
  }

}
