import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // tipologia di classi
  classList = {
    success: 'with-icon success',
    error: 'with-icon error',
    info: 'with-icon info',
    avvertenza: 'with-icon warning'
  };

  // tipologia di svg
  svgList = {
    success: 'success',
    error: 'error',
    info: 'info',
    avvertenza: 'avvertenza'
  };

  svg = 'success';
  classe = 'with-icon success';
  messaggio = 'sdfsdfdsfds';
  show = false;

  constructor() { }

  public getClasse(): string {
    return this.classe;
  }

  // metodo per settare la classe e di conseguenza l'svg da utilizzare nell'alter
  public setClasse(classe: string) {
    switch (classe) {
      case 'success': this.classe = this.classList.success; break;
      case 'error': this.classe = this.classList.error; break;
      case 'info': this.classe = this.classList.info; break;
      case 'avvertenza': this.classe = this.classList.avvertenza; break;
    }
    this.setSvg(classe);
  }

  public getSvg(): string {
    console.log(this.svg);
    return this.svg;
  }

  public setSvg(classe: string) {
    switch (classe) {
      case 'success': this.svg = this.svgList.success; break;
      case 'error': this.svg = this.svgList.error; break;
      case 'info': this.svg = this.svgList.info; break;
      case 'avvertenza': this.svg = this.svgList.avvertenza; break;
    }
  }

  public getMessaggio(): string {
    return this.messaggio.toUpperCase();
  }

  public setMessaggio(messaggio: string) {
    this.messaggio = messaggio;
  }

  public getShow(): boolean {
    return this.show;
  }

  // metodo utilizzato per visionare l'alert
  public Show(classe: string, messaggio: string) {
    console.log(classe, messaggio);
    this.show = false;
    this.setClasse(classe);
    this.setMessaggio(messaggio);
    this.show = true;
    setTimeout(() => this.show = false, 4000);
  }
}
