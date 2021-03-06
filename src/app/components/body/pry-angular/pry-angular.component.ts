import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ANGULAR_PRJS } from 'src/app/data/angular.data';
import { ModalZoomComponent } from '../../shared/modal-zoom/modal-zoom.component';

@Component({
  selector: 'app-pry-angular',
  templateUrl: './pry-angular.component.html',
  styleUrls: ['./pry-angular.component.css']
})
export class PryAngularComponent implements OnInit {

  IMG_PATH = './assets/imgs/proyectos/angular/';
  projects: any[] = [];
  fotoZoom = { url: '', titulo: ''};

  constructor( private router: Router ) {
    this.projects = ANGULAR_PRJS;
  }

  ngOnInit() {
  }

  // Carga la foto a mostrar en el Modal
  seleccionarFoto( url: string, titulo: string ) {
    this.fotoZoom.url = this.IMG_PATH + url;
    this.fotoZoom.titulo = titulo;
  }

  ir_a_detalle(idx) {
    this.router.navigate(['/detalle', 'angular', idx]);
  }

}
