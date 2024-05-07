//declarar e inicializar una variable
//Variable global
var numero = 2;

// Condicional expresion clasica
if(numero > 6){
   console.log('Esta aprobado')
} else{
    console.log('Desaprobado')
}

//Condicional - Expresion ternaria
var respuesta = (numero > 6) ? 'Aprobado':'Desaprobado'
console.log(respuesta) 

//Diferencias en LET y VAR

var x = 44
if(x == 44){
    x =74
    console.log(x) //74
}
console.log(x) //74

let y = 50
if(y == 50){
    let y = 11
    console.log(y) //11 
}
console.log(y) //50

//Constantes
const nombre = 'Juan'
//nombre = 'Pepe' no se puede asignar un nuevo valor a una constante.