import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  downloadCurriculum() {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/files/CV_Almalaurea.pdf';
    link.download = 'CV_Almalaurea.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
