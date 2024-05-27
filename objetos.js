const empleado = {
    nombre:'Juan',
    apellido:'Rodriguez',
    dni:33234543,
    correo:{
        gmail:'juan@gmail.com',
        outlook:'juan@outlook.com'
    }
}

//Forma tradicional
const nombre = empleado.nombre

//const gmail = empleado.correo.gmail
//const outlook = empleado.correo.outlook

//Destructuring object
const {gmail,outlook}= empleado.correo

console.log(`
correo Gmail: ${gmail} 
Correo outlook: ${outlook} 
Apellido: ${apellido} 
dni: ${dni}
`) 
