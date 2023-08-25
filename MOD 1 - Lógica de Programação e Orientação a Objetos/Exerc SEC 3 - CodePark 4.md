# Instruções do projeto

``` yaml
Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.
```

- ## Resposta:

```js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.filho = null;
  }
  get apresentarPai(){
    console.log(this)
  }
}

const pessoa1 = new Pessoa("João", 36);
const pessoa2 = new Pessoa("Lucas", 9);

pessoa1.filho = pessoa2

pessoa1.apresentarPai
```

***

<details> <summary>Tags</summary>

[[SEC 3 - Algoritmo e Estrutura de Dados]]

</details>