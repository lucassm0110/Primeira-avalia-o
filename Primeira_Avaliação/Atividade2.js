prompt = require("prompt-sync")({ sigint: true });
quantidadePares = 0;
quantidadeImpares = 0;
for (i = 0; i < 10; i++) {
  numero = parseInt(prompt("Digite um número inteiro: "));
  if (numero % 2 == 0) {
    quantidadePares++;
  } else {
    quantidadeImpares++;
  }
}
console.log("Quantidade de números pares: " + quantidadePares);
console.log("Quantidade de números ímpares: " + quantidadeImpares);