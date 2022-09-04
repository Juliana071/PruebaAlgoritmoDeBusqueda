const PromptSync = require('prompt-sync');
const prompt = require('prompt-sync')();

console.log(".:. Costo de un Buffet .:.\n");
sexo = prompt('Ingrese su sexo = hombre/mujer: ');

switch (sexo) 
{
    case 'mujer':
        console.log('El comensal es mujer de por lo tanto pagará: 300 pesos.\n');
        break;

    case 'hombre':
        edad =prompt('Ingrese su edad: ');
        if(edad >= 16) console.log('El comensal es hombre de '+edad+' anios por lo tanto pagará: 400 pesos.\n');
        else console.log('El comensal es hombre de '+edad+' anios por lo tanto pagará: 250 pesos.\n');
        break;
    default:
        console.log('Opcion no valida');
    break;
}
console.log(".:. Fin del programa.:.");


