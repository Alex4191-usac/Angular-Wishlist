import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Destinoviaje } from '../models/destino-viajes.model';



@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Destinoviaje>;
  fg: FormGroup;

  constructor(private fb: FormBuilder) {
    //iniciarlizar
    this.onItemAdded = new EventEmitter();
    //vinculacion con tag html
    this.fg = this.fb.group({
      nombre: [''],
      url: ['']
    });
   }

  ngOnInit(): void {
  }

  guardar(nombre:string, url:string): boolean{
    const d = new Destinoviaje(nombre,url);
    this.onItemAdded.emit(d);
    return false;
  }

}
