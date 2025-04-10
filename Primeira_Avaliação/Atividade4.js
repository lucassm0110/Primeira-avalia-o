let salario = 1000;
let percentual = 0.0015;

for (let ano = 1996; ano <= 2023; ano++) {
  salario += salario * percentual;
  percentual *= 2;
}

console.log("Salário atual do funcionário: R$ " + salario.toFixed(2));


let prompt = require("prompt-sync")({ sigint: true });
let salarioInicial = parseFloat(
  prompt("Digite o salário inicial do funcionário: ")
);
let percentual2 = 0.0015;
for (let ano = 1996; ano <= 2023; ano++) {
  salarioInicial += salarioInicial * percentual2;
  percentual2 *= 2;
}