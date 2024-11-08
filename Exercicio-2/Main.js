// Sequência de fibbonaci
// Variáveis
let num =  parseInt(Math.random()*100);
const MAX_NUM = 50;
let fibbonaci = [0, 1];
let found = false;

// Mostrar o número gerado
console.log(`Número para checagem: ${num}`);

// Criar a sequência fibbonnaci até o valor gerado (caso exista) ou no máximo até o 100° valor
for(let i = 0; i <= MAX_NUM; i++){
  let a = fibbonaci[i];
  let b = fibbonaci[i+1];
  found = (i <= 1) ? (num == fibbonaci[i]) : (num == fibbonaci[i+1]);
  if(found) {
    console.log(`O número ${num} pertece à sequência, na posição ${  (i <= 1) ? (i+1) : (i+2)}`);
    break;
  }
  fibbonaci.push(a+b);
}

console.log(fibbonaci)

if(!found) console.log(`O número ${num} não pertece à sequência`);

