import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EspectaculosComponent } from './espectaculos/espectaculos.component';

;

const routes: Routes = [
{path : 'Inicio', component: InicioComponent},
{path : 'Registrate', component: RegistrarComponent},
{ path: 'Espectaculo', component: EspectaculosComponent },
{path : '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// routing