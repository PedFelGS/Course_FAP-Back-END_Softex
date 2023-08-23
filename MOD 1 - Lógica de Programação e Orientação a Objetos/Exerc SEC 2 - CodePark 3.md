# Instruções do projeto

``` yaml
Desenvolva, utilizando o Google Blockly, um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:
 
- Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

No sistema, todos os valores devem estar armazenados em variáveis.
```

- ## Resposta:

``` js
let nomeAluno = prompt("Nome do aluno: ")
let nota1 = parseFloat(prompt("Primeira nota: "))
let nota2 = parseFloat(prompt("Segunda nota: "))
let faltas = Number(prompt("Quantidade de faltas: "))

media = (nota1 + nota2) / 2

if (media < 7) {
  console.log(`O aluno ${nomeAluno} está REPROVADO!`)
} else if (faltas > 3) {
  console.log(`O aluno ${nomeAluno} por possuir ${faltas} faltas está REPROVADO!`)
} else if (media >= 7) {
  console.log(`O aluno ${nomeAluno} por possuir ${media} pontos, nota acima da média exigida, está APROVADO!`)
}
```

***

<details> <summary>Tags</summary>

[[SEC 2 - Introdução a Programação]]

</details>