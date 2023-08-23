# Instruções do projeto

``` yaml
Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.
```

- ## Resposta

Concluído? Sim

``` js
let lista = [
  ["Caramelo","Cachorro", 10],
  ["Garfield","Gato", 7],
  ["Manny", "Mamute", 28],
  ["Skipper", "Peguin", 32]
]

console.log(lista)

////////////////
console.log("\n")
////////////////

lista.forEach(animal => {
  return console.log(`Nome: ${animal[0]}, Espécie: ${animal[1]}, Idade: ${animal[2]}`)
})

////////////////
console.log("\n")
////////////////

function exibirInfo() {
  for (animal of lista) {
    console.log(`Nome: ${animal[0]}, Espécie: ${animal[1]}, Idade: ${animal[2]}`)
  }
}

exibirInfo()
```

***

<details> <summary>Tags</summary>

[[SEC 3 - Algoritmo e Estrutura de Dados]]

</details>