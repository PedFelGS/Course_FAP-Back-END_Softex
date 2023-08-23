# Instruções do projeto

``` yaml
Construa um algoritmo no Blockly que declare as seguintes variáveis: nome, idade, altura e maior_de_idade.

Depois, atribua valores para essas variáveis, sabendo que a variável nome é uma string, a variável idade é um inteiro, a variável altura é um float e a variável maior_de_idade é um booleano.

No final, imprima os valores das variáveis.
```

- ## Resposta:

``` js
let nome = prompt("Nome: ")
let idade = Number(prompt("Idade: "))
let altura = parseFloat(prompt("Altura: "))
let maiorIdade = true

console.log(`${nome} tem ${idade} anos e ${altura} de altura. É maior de idade? ${maiorIdade}`)
```

***

<details> <summary>Tags</summary>

[[SEC 2 - Introdução a Programação]]

</details>