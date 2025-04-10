montante = parseFloat(prompt("Digite o capital inicial: "));
tempo = parseInt(prompt("Digite o tempo em meses: "));
juros = parseFloat(prompt("Digite a taxa de juros mensal: "));
montante = montante * (1 + juros);
console.log("Montante: " + montante.toFixed(2));