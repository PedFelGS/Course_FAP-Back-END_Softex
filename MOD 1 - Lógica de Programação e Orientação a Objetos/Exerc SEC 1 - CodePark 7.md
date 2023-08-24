# Instruções do projeto

``` yaml
Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, como nos exemplos em anexo.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número.
```

- ## Resposta:

``` js
let escolherTabuada, numTab, resultTab

escolherTabuada = Number(prompt("Digite a tabuada do número que deseja: "))

if (escolherTabuada) {
	numTab = escolherTabuada
	tabuada()
}

function tabuada() {
	let cont = 0
	console.log(`Esta é a tabuada do número ${numTab}:`)
	while (cont <= 9) {
		cont++
		resultTab = numTab * cont
		console.log(`${numTab} x ${cont} = ${resultTab}`)
	}
}
```

***

<details> <summary>Tags</summary>

[[SEC 1 - Lógica Imperativa]]

</details>