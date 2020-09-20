import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EspectaculosComponent } from './espectaculos/espectaculos.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistrarComponent,
    EspectaculosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


