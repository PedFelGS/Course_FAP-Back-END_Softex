# Instruções do projeto

``` yaml
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2023).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
```

- ## Resposta:

``` js
let nomeCompleto = prompt("Nome Completo:")

while(true) {
  let anoNascimento = Number(prompt("Ano de Nascimento:"))
  
  if (isNaN(anoNascimento)) {
    console.log("Digite um valor válido!");
  } else if (anoNascimento < 1922 && anoNascimento > 2023) {
    console.log("Digite um ano entre 1922 e 2023!");
  }
  else {
    let idade = 2023 - anoNascimento
    console.log(`Nome: ${nomeCompleto} \n Idade: ${idade}`)
    break
  }
}
```