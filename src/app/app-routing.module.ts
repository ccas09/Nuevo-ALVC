import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EspectaculosComponent } from './espectaculos/espectaculos.component';
import { NacionalComponent } from './nacional/nacional.component';
import { DetailComponent } from './detail/detail.component';

;

const routes: Routes = [
{path: '', redirectTo: '/Inicio', pathMatch: 'full'},
{path : 'Inicio', component: InicioComponent},
{path : 'Registrate', component: RegistrarComponent},
{path: 'Espectaculo', component: EspectaculosComponent},
{path: '/notica/:id', component: DetailComponent},
{path: 'Nacional', component: NacionalComponent},
{path : '**',redirectTo:'/Inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
