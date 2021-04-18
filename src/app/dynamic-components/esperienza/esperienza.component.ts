import { Component, OnInit } from '@angular/core';
import lavoroJson from 'src/assets/files/esperienze.json';
@Component({
  selector: 'app-esperienza',
  templateUrl: './esperienza.component.html',
  styleUrls: ['./esperienza.component.css']
})
export class EsperienzaComponent implements OnInit {

  lavoroModello;
  info;
  constructor() {
    const json = lavoroJson.value;
    this.lavoroModello = json;
    console.log(this.lavoroModello);
  }

  ngOnInit(): void {
  }

  selezionaInfo(n) {
    this.info = n;
  }
  getReverseList(list) {
    return list.reverse();

  }
}
