import { Component } from '@angular/core';

import { EXPERIENCIAS } from '../../../data/about.data';

declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  experiencias = {};
  fotoSeleccionada = { url: '', descripcion: ''};

  constructor() {
    this.experiencias = EXPERIENCIAS;

   }

  seleccionarFoto( url: string, descripcion: string ) {
    this.fotoSeleccionada.url = url;
    this.fotoSeleccionada.descripcion = descripcion;
  }

}
