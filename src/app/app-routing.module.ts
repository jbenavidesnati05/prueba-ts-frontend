import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NegocioComponent } from './componentes/negocio/negocio.component';
import { ServicioComponent } from './componentes/servicio/servicio.component';
import { ProfesionalComponent } from './componentes/profesional/profesional.component';

const routes: Routes = [
  {path:'',redirectTo:'negocios', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'negocios',component: NegocioComponent},
  {path:'servicios',component: ServicioComponent},
  {path:'profesionales',component: ProfesionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
