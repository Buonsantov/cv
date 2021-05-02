import { Component, DoCheck, OnInit } from '@angular/core';
import { LinguaService } from 'src/app/services/lingua.service';
import lavoroJson from 'src/assets/files/esperienze.json';
@Component({
  selector: 'app-esperienza',
  templateUrl: './esperienza.component.html',
  styleUrls: ['./esperienza.component.css']
})
export class EsperienzaComponent implements OnInit, DoCheck {

  lavoroModello;
  info;

  reverseListOfExp = [];

  constructor(
    public linguaService: LinguaService,
  ) {
    const json = lavoroJson.lingue[this.linguaService.getLingua()].value;
    this.lavoroModello = json;
    console.log(this.lavoroModello);
    this.getReverseListExp();
  }

  ngDoCheck(): void {
    this.lavoroModello = lavoroJson.lingue[this.linguaService.getLingua()].value;
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
