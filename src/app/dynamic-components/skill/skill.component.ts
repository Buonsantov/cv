import { Component, DoCheck, OnInit } from '@angular/core';
import { LinguaService } from 'src/app/services/lingua.service';
import skillJson from 'src/assets/files/skill.json';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit, DoCheck {
  skillModello: any;

  constructor(
    public linguaService: LinguaService
  ) {
    const json = skillJson.lingue[this.linguaService.getLingua()].value;
    this.skillModello = json;
    console.log(this.skillModello);
  }

  ngDoCheck(): void {
    this.skillModello = skillJson.lingue[this.linguaService.getLingua()].value;
  }
  ngOnInit(): void {
  }

}
