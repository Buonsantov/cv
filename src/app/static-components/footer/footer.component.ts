import { Component, DoCheck, OnInit } from '@angular/core';
import { LinguaService } from 'src/app/services/lingua.service';
import infoGenerali from 'src/assets/files/infoGenerali.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, DoCheck {

  infoGenerali;
  constructor(
    public linguaService: LinguaService
  ) {
    this.infoGenerali = infoGenerali.lingue[this.linguaService.getLingua()].value;
  }
  ngDoCheck(): void {
    this.infoGenerali = infoGenerali.lingue[this.linguaService.getLingua()].value;
  }

  ngOnInit(): void {
  }

}
