import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { Destinoviaje } from './destino-viajes.model';

export class DestinosApiClient{
    destinos:Destinoviaje[];
    constructor(){
        this.destinos = [];
    }
    add(d:Destinoviaje){
        this.destinos.push(d);
    }
    getAll(){
        return this.destinos;
    }
}