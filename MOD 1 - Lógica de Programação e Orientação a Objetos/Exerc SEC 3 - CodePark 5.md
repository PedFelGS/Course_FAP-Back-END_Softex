# Instruções do projeto

``` yaml
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.
```

- ## Resposta:

``` js
let lista = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]

function buscarElemento(array, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i
    }
  }
}

let indiceEncontrado = buscarElemento(lista, 20)

console.log(indiceEncontrado)
```