// template string

const nombre = "Juan";
const apellido = "Acero";

/* let nombreCompleto = nombre + " " + apellido; */
let nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}
`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return `Hola mundo ${nombre}`;
}

console.log(`esto es un saludo ${getSaludo(nombre)}`);
