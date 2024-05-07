//Crear un arreglo
let lenguajes = ['JavaScript','Php','C++','Python','Go','C#']

//Longitud de un arreglo
let longitud = lenguajes.length
console.log('Longitud de un arreglo: '+longitud)

//Ultimo elemento de un arreglo
let ultimo = lenguajes[longitud-1]
console.log('último elemento de la array: '+ultimo)

/*
Vamos a recorrer un arreglo haciendo uso de la estructura repetitiva foreach
*/
lenguajes.forEach((element, index) => {
    console.log(index+'-'+element)
});

//Como agregar un elemento al final de un arreglo
lenguajes.push('Java')
console.log(lenguajes)

//Como eliminar el ultimo elemento de un arreglo 
lenguajes.pop()
console.log(lenguajes)

//Como agregar un elemento al inicio de un arreglo
lenguajes.unshift('Java')
console.log(lenguajes)

//Como eliminar el primer elemento de un arreglo
lenguajes.shift()
console.log(lenguajes)

//Como buscar un elemento y imprimir su indice
let indice = lenguajes.indexOf('Php')
console.log('Indice de PHP: '+indice)

//Eliminar elementos de un arreglo
//Necesita punto de partida y cantidad de elementos a eliminar 
//Incluyendo al elemento de partida
//Dicho metodo nos otorga como info los elementos (PHP y C++)
let elminados = lenguajes.splice(indice,2)
console.log(lenguajes)
console.log('Elementos eliminados: '+eliminados)

//Como agregar elementos de un arreglo
lenguajes.splice(1,0,'Visual Basic')
console.log(lenguajes)

//Copiar o generar un clon de un arreglo
 let lenguaje2 = lenguajes.slice()
 lenguajes2.push('Java')
 console.log(lenguajes2)