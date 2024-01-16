import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactarComponent } from './formularios/contactar/contactar.component';
import { HistoriaComponent } from './sobre-nosotros/historia/historia.component';
import { NuestroEquipoComponent } from './sobre-nosotros/nuestro-equipo/nuestro-equipo.component';
import { NuestrasBasesComponent } from './sobre-nosotros/nuestras-bases/nuestras-bases.component';
import { ImpactoComponent } from './sobre-nosotros/impacto/impacto.component';
import { WhyMoodeastComponent } from './why-moodeast/why-moodeast.component';
import { PsicologosComponent } from './psicologos/psicologos.component';
import { MejorarSaludMentalComponent } from './mejorar-salud-mental/mejorar-salud-mental.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ResuelveTusDudasComponent } from './resuelve-tus-dudas/resuelve-tus-dudas.component';
import { PreciosComponent } from './precios/precios.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { TraduccionComponent } from './traduccion/traduccion.component';

const routes: Routes = [
  // Ruta a la pagina home
  { path: '', component: HomeComponent },

  //Paginas principales
  { path: 'why-moodeast', component: WhyMoodeastComponent },
  { path: 'psicologos', component: PsicologosComponent },
  { path: 'mejorar-salud-mental', component: MejorarSaludMentalComponent },

  { path: 'coming-soon', component: ComingSoonComponent },

  //Sobre nosotros
  { path: 'historia', component: HistoriaComponent },
  { path: 'nuestro-equipo', component: NuestroEquipoComponent },
  { path: 'nuestras-bases', component: NuestrasBasesComponent },
  { path: 'impacto', component: ImpactoComponent },

  //Soporte y contacto (Formularios)
  { path: 'contactar', component: ContactarComponent },

  //Resuelve tus dudas
  { path: 'resuelve-tus-dudas', component: ResuelveTusDudasComponent },

  //Lista de precios
  {path:`precios`,component:PreciosComponent},
  
  //Pagina de bienvendia
  {path:`bienvenida`,component:BienvenidaComponent},

  //Traduccion
  {path:`traduccion`,component:TraduccionComponent},
  
  // Ruta para la página 404
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }, // Redirige cualquier otra ruta desconocida a la página 404

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

