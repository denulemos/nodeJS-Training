const array = [1,2,3]

//Mostrar todos los elementos del array sin tener que recorrerlo
console.log(...array)

//Llenar un segundo array con los valores del primero
const array2 = [...array]

console.log('Array segundo: ' + array2)

const array3 = [...array , ...array2]
console.log('Array tercero: ' + array3)

array.push(4);
console.log('Array primero con push: ' + array)

//Ejemplo con usuarios

const usuario = {
    nombre: 'Denisse', edad: 22
};

const usuarioCopia = {};
//Le pasamos los datos del primer objeto al segundo parametro
Object.assign(usuario, usuarioCopia);
console.log(usuarioCopia)

//Otra manera
const usuariocopiacopia = {...usuario}
console.log(usuariocopiacopia)
