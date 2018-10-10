import { Component, OnInit } from '@angular/core';

import { EXPERIENCIAS } from '../../../data/about.data';
import { ModalZoomComponent } from '../../shared/modal-zoom/modal-zoom.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  IMG_PATH = './assets/imgs/about/';
  experiencias: any[] = [];
  fotoZoom = { url: '', titulo: ''};

  constructor() {
    this.experiencias = EXPERIENCIAS;
   }

  ngOnInit() {
  }

  // Carga la foto a mostrar en el Modal
  seleccionarFoto( url: string, titulo: string ) {
    this.fotoZoom.url = this.IMG_PATH + url;
    this.fotoZoom.titulo = titulo;
  }

}
