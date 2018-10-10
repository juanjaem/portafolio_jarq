import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-zoom',
  templateUrl: './modal-zoom.component.html',
  styleUrls: ['./modal-zoom.component.css']
})
export class ModalZoomComponent implements OnInit {

  @Input() fotoZoom: any;

  constructor() { }

  ngOnInit() {
  }

}
