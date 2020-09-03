//Correrlo con node asyncAwait.js

//Recibe un parametro "message"
const displayMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         //resolvemos la promesa
         resolve(message)
        }, 3000);
    });
}

//PROMISES
//Vamos a obtener result cuando displayMessage termine
displayMessage('Hola').then(result => {
    console.log('result' , result);
    displayMessage('Hola?').then(result => {
        console.log('result', result);
    }).catch(error => {
        console.log('Hubo un error' + error)
    })
});

//Aunque esto este ultimo, se va a mostrar primero, ya que se esta corriendo de manera sincronica
console.log('=========')

//ASYNC - AWAIT
//Creamos una funcion que llame a la promise antes hecha
//Tiene que ser una funcion async() para poder llamar funciones con el await
const miFuncion = async() =>{
    let result = await displayMessage('Funcion');
    console.log(result);
    let result2 = await saludo();
    console.log(result2)
}

const saludo = async()=> {
    return 'hola! soy la funcion saludo'
}

miFuncion();