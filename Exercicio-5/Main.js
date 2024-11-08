// Inverter string
// Denpendencias
const prompt = require('prompt-sync')();

// Variaveis
let stringOriginal = "";
let stringInvertida = "";

// Entrada da String
stringOriginal = prompt("Digite uma palavra ou frase para ver seu valor invertido: ");

//Inversão da string
for(let i = (stringOriginal.length-1); i >= 0; i--){
  stringInvertida += stringOriginal[i];
}

//Mostrar o o resultado invertido
console.log(`Valor invertido: ${stringInvertida}`);
