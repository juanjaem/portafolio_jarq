import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ANGULAR_PRJS } from '../../../data/angular.data';

@Component({
  selector: 'app-detalle-pry',
  templateUrl: './detalle-pry.component.html',
  styleUrls: ['./detalle-pry.component.css']
})
export class DetallePryComponent implements OnInit {

  proyecto: any;
  tipo_proyecto: string;

  IMG_PATH = './assets/imgs/proyectos/angular/';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    const params = this.activatedRoute.snapshot.params; // Recogemos los 2 parametros pasados por URL

    this.tipo_proyecto = params.tipo_proyecto; // Mas adelante lo necesitaremos para mostrar un icono de ionic o angular

    switch ( params.tipo_proyecto ) { // Buscamos la info según el index en el fichero correspondiente
      case 'angular':
        this.proyecto = ANGULAR_PRJS[ params.idx ];
        break;
      case 'ionic':
        // this.proyecto = IONIC_PRJS[ params.idx ];
        break;
      default:
        break;
    }

  }

}
