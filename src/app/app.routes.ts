import { Routes } from '@angular/router';

import {HeaderComponent, BodyComponent, AboutComponent, FooterComponent,
        PryAngularComponent, PryIonicComponent } from './components/index.components';


export const ROUTES: Routes = [
  {path: 'about', component: AboutComponent },
  {path: 'angular', component: PryAngularComponent },
  {path: 'ionic', component: PryIonicComponent },

//   {path: 'search', component: SearchComponent },
//   {path: 'artist/:id', component: ArtistaComponent },
//   {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'about' }

];
