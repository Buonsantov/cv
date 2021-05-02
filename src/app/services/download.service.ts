import { Injectable } from '@angular/core';
import infoGenerali from 'src/assets/files/infoGenerali.json';
import { LinguaService } from './lingua.service';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  candidato;
  infoGenerali: any;
  constructor(
    public linguaService: LinguaService
  ) {
    const json = infoGenerali.lingue[this.linguaService.getLingua()].value;
    this.infoGenerali = json;
    this.candidato = this.infoGenerali.nomeCandidato;
   }

  downloadCurriculum(filePath) {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = filePath;
    link.download = 'Curriculum_' + this.candidato + '.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
