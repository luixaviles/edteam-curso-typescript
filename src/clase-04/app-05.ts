export {};
// METODOS SET Y GET
// ATRIBUTOS DE SOLO LECTURA: readonly

class Curso {
    constructor(private readonly _id: number, private readonly _nombre: string) {}

    get id() {
        // Permite OBTENER el estado de "id"
        return this._id;
    }
    // set id(id: number) {
    //     this._id = id;
    // }
    get nombre() {
        return this._nombre;
    }
    // set nombre(nombre: string) {
    //     this._nombre = nombre;
    // }
}

class EscuelaDigital {
    // Atributos
    private cursos: Curso[] = [];

    // Funcion que nos permite crear objetos
    constructor(private _nombre: string) {}

    public agregarCurso(curso: Curso) {
        this.cursos.push(curso);
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }
}

const escuela = new EscuelaDigital('EDteam');
let cursoJS = new Curso(1, 'JavaScript');
let cursoTS = new Curso(2, 'TypeScript');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atributos publicos
// modo lectura
// cursoJS.nombre = 'JavaScript desde Cero'; // Asignacion: SET
console.log('nombre cursoJS', cursoJS.nombre); // Leyendo estado: GET
// cursoJS.setNombre('JavaScript desde Cero');
// cursoJS.id = 20; // Asignacion: SET 
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre); //Leyendo estado: GET