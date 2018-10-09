import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Rutas
import { ROUTES } from './app.routes';

// Componentes
import {HeaderComponent, BodyComponent, AboutComponent, FooterComponent,
        PryAngularComponent, PryIonicComponent } from './components/index.components';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    AboutComponent,
    FooterComponent,
    PryAngularComponent,
    PryIonicComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
