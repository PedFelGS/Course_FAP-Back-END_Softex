# Instruções do projeto

``` yaml
Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.
```

- ## Resposta:

``` js
let i = 5

console.log(`Iniciando a contagem regressiva...`)

while(true) {
  console.log(`Faltam ${i} segundos para a bomba explodir!`)
  if (i === 0) {
    console.log("BuM!")
    break
  }
  i--
}
```

***

<details> <summary>Tags</summary>

[[SEC 2 - Introdução a Programação]]

</details>