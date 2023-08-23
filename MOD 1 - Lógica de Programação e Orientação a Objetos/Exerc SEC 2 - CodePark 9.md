# Instruções do projeto

``` yaml
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos.
```

- ## Resposta:

``` js
const candidatosVotos = {
  CandidatoX: 0,
  CandidatoY: 0,
  CandidatoZ: 0,
  votoBranco: 0,
  votoNulo: 0,
};

console.log(`Canditatos disponíveis para votação:\n\nCandidato X: 889\nCandidato Y: 847\nCandidato Z: 515\nBranco: 0\n\n-----------------\n`)

let continuarVotando = true;

while (continuarVotando) {
  let voto = Number(prompt("Digite o número correspondente ao candidato ou '0' para voto em branco:"))
  if (isNaN(voto)) {
    console.log("\nVocê não digitou um número de candidato válido!\n")
    continue
  } else if (voto === 889) {
    candidatosVotos.CandidatoX += 1
  } else if (voto === 847) {
    candidatosVotos.CandidatoY += 1
  } else if (voto === 515) {
    candidatosVotos.CandidatoZ += 1
  } else if (voto === 0) {
    candidatosVotos.votoBranco += 1
  }
  else {
    candidatosVotos.votoNulo += 1
  }
  continuarVotando = confirm("Há mais alguém para votar?")
}

//

let candidatoVencedor = Object.keys(candidatosVotos)
  .filter(candidato => candidato !== 'votoBranco' && candidato !== 'votoNulo')
  .reduce((vencedor, candidato) =>
    (candidatosVotos[candidato] > candidatosVotos[vencedor]) ? candidato : vencedor
  );

console.log(`\n---- Total Votação: ----\n\n Candidato X: ${candidatosVotos.CandidatoX} \n Candidato Y: ${candidatosVotos.CandidatoY} \n Candidato Z: ${candidatosVotos.CandidatoZ} \n Votos em branco: ${candidatosVotos.votoBranco}\n Votos nulos: ${candidatosVotos.votoNulo}`)

console.log(`\n${candidatoVencedor} foi o candidato vencedor da eleição!`)
```

***

<details> <summary>Tags</summary>

[[SEC 2 - Introdução a Programação]]

</details>