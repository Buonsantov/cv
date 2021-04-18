import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from './loader';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    this.loaderSubject.next({ show: true } as LoaderState);
    // tslint:disable-next-line: object-literal-key-quotes
    $('body').css({ 'overflow': 'hidden' });
  }
  hide() {
    this.loaderSubject.next({ show: false } as LoaderState);
    // tslint:disable-next-line: object-literal-key-quotes
    $('body').css({ 'overflow': 'visible' });
  }
}
