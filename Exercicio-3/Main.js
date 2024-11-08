// Calculo de faturamento mensal
const numDias = 31;

// Prenchendo o faturamento diário com valores aleatórios
let faturamentos = Array.from({length: numDias}, () => (+(Math.random() * 100).toFixed(2)));

// Soma os valores, excluindo os dias sem faturamento e calcula a média
let soma = faturamentos.reduce((acumulador, valor) => (valor != 0) ? acumulador + valor : null)
let media = soma / faturamentos.length;

// Verifica quais são o maior e menor faturamento
faturamentos.sort();
let menorValor = faturamentos[0]
let maiorValor = faturamentos[faturamentos.length -1];

// Calcula quantos dias o faturamento esteve acima da média
let diasAcimaDaMedia = 0
faturamentos.filter((valor) => valor > media).map(() => diasAcimaDaMedia += 1);

// Cria um objeto com as informações estabelecidas;
let faturamentoMensal = {
  menorValor: menorValor,
  maiorValor: maiorValor,
  diasAcimaDaMedia: diasAcimaDaMedia
}

//Transforma o objeto em um JSON
let faturamentoMensalJSON = JSON.stringify(faturamentoMensal);

console.log(faturamentoMensalJSON);