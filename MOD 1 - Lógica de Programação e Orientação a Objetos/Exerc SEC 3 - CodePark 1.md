# Instruções do projeto

``` yaml
Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.
```

- ## Resposta

Concluído? Não - Imcompleto

``` js

let lista1 = [];

function nomesPessoas(pessoa1, pessoa2, pessao3, pessoa4, pessoa5, pessoa6, pessoa7, pessoa8, pessoa9, pessoa10) {
    lista1.push(pessoa1, pessoa2, pessao3, pessoa4, pessoa5, pessoa6, pessoa7, pessoa8, pessoa9, pessoa10)
    return console.log(lista1)
}

nomesPessoas("1. Gabriel", "2. Maria", "3. João", "4. Gabriela", "5. Júlia", "6. Lucas", "7. Heitor", "8. Arthur", "9. Matheus", "10. Raphael")

//

let lista2 = [];

function idadesPessoas(pessoaIdade1, pessoaIdade2, pessoaIdade3, pessoaIdade4, pessoaIdade5, pessoaIdade6, pessoaIdade7, pessoaIdade8, pessoaIdade9, pessoaIdade10) {
    lista2.push(pessoaIdade1, pessoaIdade2, pessoaIdade3, pessoaIdade4, pessoaIdade5, pessoaIdade6, pessoaIdade7, pessoaIdade8, pessoaIdade9, pessoaIdade10)
    return console.log(lista2)
}

idadesPessoas(20, 25, 23, 24, 19, 20, 18, 15, 16, 20)

//

let lista3 = [];

function CorsPessoas(pessoaCor1, pessoaCor2, pessoaCor3, pessoaCor4, pessoaCor5, pessoaCor6, pessoaCor7, pessoaCor8, pessoaCor9, pessoaCor10) {
    lista3.push(pessoaCor1, pessoaCor2, pessoaCor3, pessoaCor4, pessoaCor5, pessoaCor6, pessoaCor7, pessoaCor8, pessoaCor9, pessoaCor10)
    return console.log(lista3)
}

CorsPessoas("azul", "verde", "amarelo", "roxo", "marrom", "vermelho", "verde", "azul", "amarelo", "vermelho")
```