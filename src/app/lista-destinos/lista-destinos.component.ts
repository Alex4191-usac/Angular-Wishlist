import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Destinoviaje } from './../models/destino-viajes.model';
import {DestinosApiClient } from './../models/destinos-api-client.model';


@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded:EventEmitter<Destinoviaje>;
  //destinos: Destinoviaje[];
  updates: string[];
  constructor(public destinosApiClient:DestinosApiClient) { 
    this.onItemAdded = new EventEmitter();
    this.updates=[];
    this.destinosApiClient.suscribeOnChange((d:Destinoviaje) =>{
      if(d!=null){
        this.updates.push('se ha elegido a'+ d.nombre);
      }
    });
  }

  ngOnInit(): void {
  }

  agregado(d: Destinoviaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    /*this.destinos.push(d);
    return false;*/
  }

  Elegido(d:Destinoviaje){
    this.destinosApiClient.elegir(d);
   
  }

}
