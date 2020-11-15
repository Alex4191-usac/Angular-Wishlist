import { Component, OnInit } from '@angular/core';
import { Destinoviaje } from './../models/destino-viajes.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: Destinoviaje[];
  constructor() { 
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre:String, url:String):boolean {
    console.log(`nombres ${nombre}, ${url}`);
    this.destinos.push(new Destinoviaje (nombre,url));
    return false;
  }

}
