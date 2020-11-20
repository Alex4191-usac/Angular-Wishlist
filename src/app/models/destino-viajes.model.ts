export class Destinoviaje {
    private selected: boolean;
    public servicios: string[];
    constructor(public nombre: string, public imageUrl: string){ 
        this.servicios = ['Hospedaje','Piscina','Desayuno','Parqueo'];
    }

    isSelected(): boolean{
        return this.selected;
    }

    setSelected(s: boolean){
        this.selected = s;
    }
}