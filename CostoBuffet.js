
const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let interfazEdad = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question('Ingrese su sexo: 1:Hombre/2:Mujer ', function(respuesta)
{
    if (respuesta = 1) 
    {
        interfazEdad.question('Ingrese su edad: ', function(edad){
            if (edad >= 16) console.log("El comensal es hombre de"+edad+" anios y paga $400 pesos");
            else console.log("El comensal es hombre de"+edad+" anios y paga $250 pesos");
            interfazEdad.close();
        });
        
    }
    else if (respuesta = 2)
    {
        console.log("El comensal es mujer y paga $300 pesos");
    }
    else 
    {
        console.log('Opcion NO valida');
    }

    interfazCaptura.close();
});


