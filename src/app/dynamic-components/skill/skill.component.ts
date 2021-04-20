import { Component, OnInit } from '@angular/core';
import skillJson from 'src/assets/files/skill.json';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillModello: any;

  constructor() {
    const json = skillJson.value;
    this.skillModello = json;
    console.log(this.skillModello);
  }

  ngOnInit(): void {
  }

}
