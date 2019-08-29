let cursos = ['TypeScript desde cero v2.0', 'Angular desde cero'];
console.log('cursos', cursos);

const inscritos = 20;

function suma(a: number, b: number) {
    return a + b;
} 

const resultado = suma(2, 3);
console.log('2+3=', resultado);

// Template literals
let codigo = `
    <button>Hola</button>
    <div></div>
`;

console.log('codigo', codigo);

let curso = 'TypeScript';
let saludo2 = `Bienvenidos al curso de ${curso}`;
console.log('saludo', saludo2);

