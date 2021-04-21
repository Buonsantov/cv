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

  reverseListOfExp = [];

  constructor() {
    const json = lavoroJson.value;
    this.lavoroModello = json;
    console.log(this.lavoroModello);
    this.getReverseListExp();
  }

  ngOnInit(): void {
  }

  selezionaInfo(n) {
    this.info = n;
  }
  getReverseListExp() {

    if (this.lavoroModello) {
      if (this.lavoroModello.length) {

        this.lavoroModello.forEach(campo => {
          if (campo.specifiche) {
            if (campo.specifiche.length) {
              campo.specifiche.reverse();
            }
          }

        });
      }
    }
  }
}
