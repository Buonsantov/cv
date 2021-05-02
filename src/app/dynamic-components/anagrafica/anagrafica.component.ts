import { Component, DoCheck, OnInit } from '@angular/core';
import { LinguaService } from 'src/app/services/lingua.service';
import anagraficaJson from 'src/assets/files/anagrafica.json';
@Component({
  selector: 'app-anagrafica',
  templateUrl: './anagrafica.component.html',
  styleUrls: ['./anagrafica.component.css']
})
export class AnagraficaComponent implements OnInit, DoCheck {

  anagraficaModello;
  constructor(
    public linguaService: LinguaService,
  ) {
    const json = anagraficaJson.lingue[this.linguaService.getLingua()].value;
    this.anagraficaModello = json;
    console.log(this.anagraficaModello);
  }
  ngDoCheck(): void {
    this.anagraficaModello = anagraficaJson.lingue[this.linguaService.getLingua()].value;
  }

  ngOnInit(): void {
  }

}
