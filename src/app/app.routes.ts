import { Routes } from '@angular/router';

import {HeaderComponent, BodyComponent, AboutComponent, FooterComponent,
        PryAngularComponent, PryIonicComponent, DetallePryComponent } from './components/index.components';


export const ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'angular', component: PryAngularComponent },
  { path: 'ionic', component: PryIonicComponent },
  { path: 'detalle/:tipo_proyecto/:idx', component: DetallePryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'about' }

];
