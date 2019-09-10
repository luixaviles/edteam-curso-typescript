import { Entidad, enumerable, readonly } from '../decoradores';

@Entidad({
    clave: 'CURSO'
})
export class Curso {
    prueba: string;

    constructor(private _id: number, private _nombre: string) {
        this.prueba = '';
    }

    @enumerable(true) // no aparece como propiedad
    getPrueba() {
        return this.prueba;
    }

    @readonly
    lectura() {

    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }
}