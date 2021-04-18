import { Component, OnInit } from '@angular/core';
import educazione from 'src/assets/files/educazione.json';

@Component({
  selector: 'app-educazione',
  templateUrl: './educazione.component.html',
  styleUrls: ['./educazione.component.css']
})
export class EducazioneComponent implements OnInit {

  istruzioneModello;
  info: any;

  constructor() {
    const json = educazione.value;
    this.istruzioneModello = json;
    console.log(this.istruzioneModello);
  }

  ngOnInit(): void {
  }

  selezionaInfo(n) {
    this.info = n;
  }

}
