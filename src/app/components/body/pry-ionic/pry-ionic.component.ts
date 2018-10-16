import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IONIC_PRJS } from 'src/app/data/ionic.data';
import { ModalZoomComponent } from '../../shared/modal-zoom/modal-zoom.component';

@Component({
  selector: 'app-pry-ionic',
  templateUrl: './pry-ionic.component.html',
  styleUrls: ['./pry-ionic.component.css']
})
export class PryIonicComponent implements OnInit {

  IMG_PATH = './assets/imgs/proyectos/ionic/';
  projects: any[] = [];
  fotoZoom = { url: '', titulo: ''};

  constructor( private router: Router ) {
    this.projects = IONIC_PRJS;
  }

  ngOnInit() {
  }

  // Carga la foto a mostrar en el Modal
  seleccionarFoto( url: string, titulo: string ) {
    this.fotoZoom.url = this.IMG_PATH + url;
    this.fotoZoom.titulo = titulo;
  }

  ir_a_detalle(idx) {
    this.router.navigate(['/detalle', 'ionic', idx]);
  }


}
