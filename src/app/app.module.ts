import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavComponent } from './componentes/nav/nav.component';
import { DirectorioServComponent } from './componentes/directorio-serv/directorio-serv.component';
import { DirectorioNegComponent } from './componentes/directorio-neg/directorio-neg.component';
import { DirectorioProfComponent } from './componentes/directorio-prof/directorio-prof.component';
import { HomeComponent } from './componentes/home/home.component';
import { ServicioComponent } from './componentes/servicio/servicio.component';
import { NegocioComponent } from './componentes/negocio/negocio.component';
import { ProfesionalComponent } from './componentes/profesional/profesional.component';
import { PresidenteComponent } from './componentes/presidente/presidente.component';
import { TodoservyComponent } from './componentes/todoservy/todoservy.component';
import { PremiumComponent } from './componentes/premium/premium.component';
import { FrecuentesComponent } from './componentes/frecuentes/frecuentes.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { AppserviciosComponent } from './componentes/appservicios/appservicios.component';
import { AgendamientoComponent } from './componentes/agendamiento/agendamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DirectorioServComponent,
    DirectorioNegComponent,
    DirectorioProfComponent,
    HomeComponent,
    ServicioComponent,
    NegocioComponent,
    ProfesionalComponent,
    PresidenteComponent,
    TodoservyComponent,
    PremiumComponent,
    FrecuentesComponent,
    PagosComponent,
    AppserviciosComponent,
    AgendamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
