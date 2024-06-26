import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GdprComponent } from './components/gdpr/gdpr.component';
import { PrivacyModalComponent } from './components/privacy-modal/privacy-modal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactarComponent } from './formularios/contactar/contactar.component';
import { HistoriaComponent } from './sobre-nosotros/historia/historia.component';
import { ImpactoComponent } from './sobre-nosotros/impacto/impacto.component';
import { NuestrasBasesComponent } from './sobre-nosotros/nuestras-bases/nuestras-bases.component';
import { NuestroEquipoComponent } from './sobre-nosotros/nuestro-equipo/nuestro-equipo.component';
import { WhyMoodeastComponent } from './why-moodeast/why-moodeast.component';
import { PsicologosComponent } from './psicologos/psicologos.component';
import { MejorarSaludMentalComponent } from './mejorar-salud-mental/mejorar-salud-mental.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ResuelveTusDudasComponent } from './resuelve-tus-dudas/resuelve-tus-dudas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PreciosComponent } from './precios/precios.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { TraduccionComponent } from './traduccion/traduccion.component';
import { BlogComponent } from './blog/blog.component';
import { EntradaBlogComponent } from './entrada-blog/entrada-blog.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { PoliticaCookiesComponent } from './legal/politica-cookies/politica-cookies.component';
import { AvisoLegalComponent } from './legal/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './legal/politica-privacidad/politica-privacidad.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GdprComponent,
    PrivacyModalComponent,
    NotFoundComponent,
    ContactarComponent,
    HistoriaComponent,
    ImpactoComponent,
    NuestrasBasesComponent,
    NuestroEquipoComponent,
    WhyMoodeastComponent,
    PsicologosComponent,
    MejorarSaludMentalComponent,
    ComingSoonComponent,
    ResuelveTusDudasComponent,
    PreciosComponent,
    BienvenidaComponent,
    TraduccionComponent,
    BlogComponent,
    EntradaBlogComponent,
    ProfesionalesComponent,
    PoliticaCookiesComponent,
    AvisoLegalComponent,
    PoliticaPrivacidadComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:httpTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//AOT compilation support
export function httpTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http);
}
