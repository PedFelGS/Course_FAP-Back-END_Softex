# Instruções do projeto

``` yaml
Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 
```

- ## Resposta:

```js
let result, realizarOperacao = true;

function soma(num1, num2) {
  opProcess = num1 + num2
  return opProcess
}

function subtracao(num1, num2) {
  opProcess = num1 - num2
  return opProcess
}

function multiplicacao(num1, num2) {
  opProcess = num1 * num2
  return opProcess
}

function divisao(num1, num2) {
  opProcess = num1 / num2
  return opProcess
}


while (realizarOperacao) {
  console.log("\nLista de operações:\n\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair\n")
  
  let op = Number(prompt("Digite o valor correspondente a ação desejada: "))

  if (op !== 0) {
    let num1 = Number(prompt("Digite o primeiro valor: "))
    let num2 = Number(prompt("Digite o segundo valor: "))
    if (op === 1) {
      result = soma(num1, num2)
    } else if (op === 2) {
      result = subtracao(num1, num2)
    } else if (op === 3) {
      result = multiplicacao(num1, num2)
    } else if (op === 4) {
      result = divisao(num1, num2)
    } else {
      console.log("\n--- Essa opção não existe! ---\n")
      continue
    }
  } else {
    console.log("Saindo...")
    break
  }

  console.log(result)
  
  realizarOperacao = confirm("\nDeseja continuar?")
}
```

***

<details> <summary>Tags</summary>

[[SEC 2 - Introdução a Programação]]

</details>