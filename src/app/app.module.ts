import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { config } from 'process';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterExtService } from './Global-services/RouterExt.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfigService } from './services/config.service';
import { AlertComponent } from './static-components/alert/alert.component';
import { ContentComponent } from './static-components/content/content.component';
import { FooterComponent } from './static-components/footer/footer.component';
import { HeaderHamburgerComponent } from './static-components/header-hamburger/header-hamburger.component';
import { HeaderComponent } from './static-components/header/header.component';
import { LoaderInterceptorService } from './static-components/loader/loader-interceptor.service';
import { LoaderComponent } from './static-components/loader/loader.component';
import { HomePageComponent } from './dynamic-components/home-page/home-page.component';
import { AnagraficaComponent } from './dynamic-components/anagrafica/anagrafica.component';
import { EsperienzaComponent } from './dynamic-components/esperienza/esperienza.component';
import { ContattiComponent } from './dynamic-components/contatti/contatti.component';
import { SkillComponent } from './dynamic-components/skill/skill.component';
import { EducazioneComponent } from './dynamic-components/educazione/educazione.component';

/**
 *  Da importare per avere la configurazione al boot
 */
export function appInit(appConfigService: ConfigService) {
    return () => appConfigService.init();
}
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        LoaderComponent,
        PageNotFoundComponent,
        AlertComponent,
        HeaderHamburgerComponent,
        HomePageComponent,
        AnagraficaComponent,
        EsperienzaComponent,
        ContattiComponent,
        SkillComponent,
        EducazioneComponent

    ],
    imports: [
        FormsModule,
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        ConfigService,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
        { provide: APP_INITIALIZER, useFactory: appInit, multi: true, deps: [ConfigService] },

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private routerExtService: RouterExtService) { }
}
