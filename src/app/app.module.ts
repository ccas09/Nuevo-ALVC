import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EspectaculosComponent } from './espectaculos/espectaculos.component';
import { NacionalComponent } from './nacional/nacional.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistrarComponent,
    EspectaculosComponent,
    NacionalComponent,
    NewsCardComponent,
    NavbarComponent,
    DetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


