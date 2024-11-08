//Calculo de percentual de representação
let estados = [];

// Classe modelo para criação de novos estados
class estado{
  percentual = 0;
  constructor(UF, faturamento){
    this.UF = UF;
    this.faturamento = faturamento;
  }
}

// Criação dos estados
estados.push(new estado("SP", 67836.43 ));
estados.push(new estado("RJ", 36678.66 ));
estados.push(new estado("MG", 29229,88 ));
estados.push(new estado("ES", 27165,48 ));
estados.push(new estado("OUTROS", 19849.53));

// Calculo do faturamento
let faturamentoTotal = 0;
estados.map((valor) => faturamentoTotal += valor.faturamento);
console.log(`Faturamento total: R$${faturamentoTotal}`);

// Calculo do percentual de cada UF
estados.forEach((valor) => valor.percentual = +((valor.faturamento/faturamentoTotal*100)).toFixed(2));

// Mostrar os valores 
console.log("------------ FATURAMENTO MENSAL -----------");
estados.map((valor) => console.log(`${valor.UF} - R$${valor.faturamento} (${valor.percentual}%)`));