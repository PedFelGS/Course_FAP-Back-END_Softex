# Instruções do projeto

``` yaml
Em uma inscrição, o usuário informou os seguintes dados:

- Nome: José Almeida da Silva
- CPF: 12345678900
- RG: 9517530
- Altura: 1,78
- Endereço: Rua A, 380 – Centro – Recife/PE

No algoritmo, descreva como será:
1. A proposta das variáveis;
2. Elaborada a declaração das variáveis;
3. Utilizado o comando de atribuição.
```

- ## Resposta

Serão utilizadas variáveis do tipo string para armazenar informações de texto, como nome e endereço. E variáveis do tipo number serão empregadas para guardar valores numéricos, como CPF, RG e altura. Todas essas variáveis serão declaradas com nomes descritivos correspondentes aos valores armazenados e inicializadas através do comando de atribuição "=" com os respectivos dados do usuário.

> Na sentença "Nome: José Almeida da Silva", podemos declarar uma variável chamada "nome" e utilizando o operador/comando de atribuição "=" para armazenar o dado "José Almeida da Silva" através de aspas em tipo de texto caractere/string.

> Na sentença "CPF: 12345678900", podemos declarar uma variável chamada "cpf" e utilizando o operador/comando de atribuição "=" para armazenar o dado "12345678900" em tipo de número inteiro.

> Na sentença "RG: 9517530", podemos declarar uma variável chamada "rg" e utilizando o operador/comando de atribuição "=" para armazenar o dado "9517530" em tipo de número inteiro.

> Na sentença "Altura: 1,78", podemos declarar uma variável chamada "altura" e utilizando o operador/comando de atribuição "=" para armazenar o dado "1,78" em tipo de número real.

> Na sentença "Endereço: Rua A, 380 – Centro – Recife/PE", podemos declarar uma variável chamada "endereco" e utilizando o operador/comando de atribuição "=" para armazenar o dado "Rua A, 380 – Centro – Recife/PE" através de aspas em tipo de texto caractere/string.

***

- ## Algoritmo

``` Js
nome = "José Almeida da Silva" // Variável do tipo string
cpf = 12345678900 // Variável do tipo number
rg = 9517530 // Variável do tipo number
altura = 1,78 // Variável do tipo number
endereco = "Rua A, 380 – Centro – Recife/PE" // Variável do tipo string
```
  
- ## Bonûs (Adicional)

// Construindo um algoritmo utilizando a linguagem de programação Javascript capaz de apresentar informações para o preenchimento pelo usuário e exibir na tela os dados obtidos.

``` js
let nome = prompt("Digite o seu nome completo: ")
let cpf = Number(prompt("Digite o seu CPF: ")) 
let rg = Number(prompt("Digite o seu RG: "))
let altura = Number(prompt("Digite a sua altura: "))
let endereco = prompt("Digite o seu endereço: " )

console.log("Dados do Usuário")
console.log("Nome:", nome)
console.log("CPF:", cpf)
console.log("RG:", rg)
console.log("Altura:", altura)
console.log("Endereço:", endereco)
```

***

<details> <summary>Tags</summary>

[[SEC 1 - Lógica Imperativa]]

</details>