import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  downloadCurriculum(filePath) {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = filePath;
    link.download = 'CV_Almalaurea.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
