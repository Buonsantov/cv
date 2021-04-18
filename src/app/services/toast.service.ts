import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  opened = false;
  className: string;
  visible = false;
  message: string;

  constructor() {
  }

  show(message, className) {
    console.log('show: ', message);
    console.log('1', this.visible);
    if (!this.opened) {
      this.opened = true;
      console.log('2', this.visible);
      this.visible = true;
      this.message = message;
      this.className = className;
      setTimeout(() => {
        this.hide();
      }, 3000);
    } else {
      console.log('3', this.visible);
    }
  }

  hide() {
    this.opened = false;
    this.visible = false;
  }

}
