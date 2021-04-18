import { Component, OnInit } from '@angular/core';
import anagraficaJson from './model/anagrafica.json';
@Component({
  selector: 'app-anagrafica',
  templateUrl: './anagrafica.component.html',
  styleUrls: ['./anagrafica.component.css']
})
export class AnagraficaComponent implements OnInit {

  anagraficaModello;
  constructor() {
    const json = anagraficaJson.value;
    this.anagraficaModello = json;
    console.log(this.anagraficaModello);
  }

  ngOnInit(): void {
  }

}
