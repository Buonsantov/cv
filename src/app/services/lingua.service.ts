import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class LinguaService {

    private lingua;

    constructor() {
        if (sessionStorage.getItem('lingua')) {
            this.lingua = sessionStorage.getItem('lingua');
        } else {
            this.lingua = 'en';
        }
    }

    setLingua(language: string) {
        this.lingua = language.toLowerCase();
    }
    getLingua() {
        return this.lingua;
    }

    getLinguaUpperCase() {
        switch (this.lingua) {
            case 'it': return 'IT'; break;
            case 'en': return 'EN'; break;
        }
    }
    getLinguaService() {
        return this.lingua;
    }

    getLinguaComplete() {
        switch (this.lingua) {
            case 'it': return 'Italiano'; break;
            case 'en': return 'English'; break;
        }
    }
}
