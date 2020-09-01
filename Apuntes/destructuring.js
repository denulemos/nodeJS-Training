const user = {
nombre: 'Denisse', edad: 22, ciudad:'BsAs'
};

const nombre = user.nombre //referenciamos directamente al objeto user
console.log(nombre);

//Podemos tomar varias cosas a la vez de usuario, sin tener que referenciarlo como antes
const {nombre, edad} = user;
console.log(nombre)