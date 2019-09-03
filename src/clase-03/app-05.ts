// INTERFACES EN TYPESCRIPT
interface ICurso {
    nombre: string;
    identificador?: number;
}

let cursoTypeScript: ICurso = {
    nombre: 'TypeScript',
    identificador: 1
}

cursoTypeScript = {
    nombre: 'JavaScript',
    identificador: 2
};

let curso2: ICurso;
curso2 = {
    nombre: 'Angular'
};
curso2 = {
    nombre: 'TypeScript',
    identificador: 100
}

console.log('cursoTypeScript', cursoTypeScript);

// EXTENDIENDO INTERFACES | HERENCIA DE INTERFACES

interface CursoEDteam extends ICurso {
    costo: number;
}

const primerCurso: CursoEDteam = {
    nombre: 'TypeScript desde Cero', // ICurso
    identificador: 200, // ICurso
    costo: 100 // CursoEDteam
}

console.log('primerCurso', primerCurso);