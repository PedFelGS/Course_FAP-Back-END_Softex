# Instruções do projeto

``` yaml
Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.
```

- ## Resposta

``` js
let nomes = [
    "Gabriel", "Maria", "João", "Gabriela", "Júlia",
    "Lucas", "Heitor", "Arthur", "Matheus", "Raphael"
];

let idades = [20, 25, 23, 24, 19, 20, 18, 15, 16, 20];

let coresFavoritas = [
    "azul", "verde", "amarelo", "roxo", "marrom",
    "vermelho", "verde", "azul", "amarelo", "vermelho"
];

console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores Favoritas:", coresFavoritas);

idades[2] = 22;
coresFavoritas[4] = "preto";


console.log("\nNomes:", nomes);
console.log("Idades:", idades);
console.log("Cores Favoritas:", coresFavoritas);
```

***

<details> <summary>Tags</summary>

[[SEC 3 - Algoritmo e Estrutura de Dados]]

</details>