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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
