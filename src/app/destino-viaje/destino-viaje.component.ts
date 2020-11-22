import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Destinoviaje } from './../models/destino-viajes.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: Destinoviaje;
  @Input() position: number;
  @HostBinding('attr.class') cssClass='col-md-4';
  @Output() clicked: EventEmitter<Destinoviaje>;
  constructor() { 
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir(){
    this.clicked.emit(this.destino);
    console.log("EA");
    return false;
  }
}
