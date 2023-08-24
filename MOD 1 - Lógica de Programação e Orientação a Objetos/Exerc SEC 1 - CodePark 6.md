# Instruções do projeto

``` yaml
Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator; 
- moto; 
- bicicleta. 

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.
```

- ## Resposta

``` js
let pergunta1, pergunta2, pergunta3, pergunta4;

console.log("Responda-as perguntas a seguir com apenas as exatas palavra-chaves Sim ou Não")
pergunta1 = prompt("É terrestre? ")


if (pergunta1 == "Sim") {
	pergunta2 = prompt("Cabe apenas uma pessoa? ")
	if (pergunta2 == "Sim") {
		pergunta4 = prompt("É pesado? ")
		if (pergunta4 == "Sim") {
			console.log("É um trator")
		}
		else if (pergunta4 == "Não") {
			console.log("É uma bicicleta")
		}
	} else if (pergunta2 == "Não") {
		pergunta3 = prompt("Só pra confirmar, se usa capacete? ")
		if (pergunta3 == "Sim")
			console.log("É uma moto")
	}
}
```