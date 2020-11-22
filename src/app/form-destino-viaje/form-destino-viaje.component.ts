import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map,filter,debounceTime,switchMap,distinctUntilChanged } from 'rxjs/operators';
import { Destinoviaje } from '../models/destino-viajes.model';



@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Destinoviaje>;
  fg: FormGroup;
  minLongitud = 3;
  searchResults : string[];

  constructor(private fb: FormBuilder) {
    //iniciarlizar
    this.onItemAdded = new EventEmitter();
    //vinculacion con tag html
    this.fg = this.fb.group({
      nombre: ['',Validators.compose([
        Validators.required,
        this.nombreValidator,
        this.nombreValidatorParametrizable(this.minLongitud)
      ])],
      url: ['']
    });
   }

  ngOnInit(): void {
    let eleNombre = <HTMLInputElement>document.getElementById('nombre');
    fromEvent(eleNombre, 'input')
    .pipe(
     map((e:KeyboardEvent)=> (e.target as HTMLInputElement).value),
     filter(text =>text.length>2),
     debounceTime(200),
     distinctUntilChanged(),
     switchMap(()=> ajax('/assets/datos.json')) //simulacion de consulta a webservices
    ).subscribe(AjaxResponse => {
      this.searchResults = AjaxResponse.response;
    });
  }

  guardar(nombre:string, url:string): boolean{
    const d = new Destinoviaje(nombre,url);
    this.onItemAdded.emit(d);
    return false;
  }

nombreValidator(control:FormControl):{[s:string]:boolean;}{
  console.log(control.value.toString().trim());
  const l = control.value.toString().trim().length;
  console.log(l);
  if(l>0 && l<5){
    return {invalidNombre:true};
  }
  return null;
}

nombreValidatorParametrizable(minLong:number): ValidatorFn{
  return(control: FormControl): {[s:string]:boolean} | null =>{
    const l = control.value.toString().trim().length;
  console.log(l);
  if(l>0 && l<minLong){
    return {minLongNombre:true};
  }
    return null;
  }
}

}
