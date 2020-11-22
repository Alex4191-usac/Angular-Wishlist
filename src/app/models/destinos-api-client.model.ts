import { BehaviorSubject, Subject } from 'rxjs';
import { Destinoviaje } from './destino-viajes.model';

export class DestinosApiClient{
    destinos:Destinoviaje[];
    current: Subject<Destinoviaje> = new BehaviorSubject<Destinoviaje>(null);
    constructor(){
        this.destinos = [];
    }
    add(d:Destinoviaje){
        this.destinos.push(d);
    }
    getAll(){
        return this.destinos;
    }

    getById(id:string): Destinoviaje {
        return this.destinos.filter(function(d){return d.isSelected.toString()=== id;})[0];
    }

    elegir(d:Destinoviaje){
        this.destinos.forEach(x => x.setSelected(false));
        d.setSelected(true);
        this.current.next(d);
    }

    suscribeOnChange(fn){
        this.current.subscribe(fn);
    }
}