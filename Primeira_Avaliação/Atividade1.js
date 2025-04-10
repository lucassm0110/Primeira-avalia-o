populacaoA = 80000;
populacaoB = 200000;
crescimentoA = 0.03;
crescimentoB = 0.015;
anos = 0;
while (populacaoA <= populacaoB) {
  populacaoA = populacaoA + populacaoA * crescimentoA;
  populacaoB = populacaoB + populacaoB * crescimentoB;
  anos++;
}
console.log(
  "Anos necessários para que a população A ultrapasse a população B: " + anos
);