
***

#### 1. Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina. Cada objeto dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes métodos para esta classe:

> Media: calcula a média final do aluno (cada prova tem peso 2,5 e o trabalho tem peso 2) 

> Final: calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a final)

``` js
const alunosMatriculados = class {
  constructor (nome, matricula, nota1, nota2, notadetrabalho) {
    this.nome = nome
    this.matricula = matricula
    this.notadeprova1 = nota1
    this.notadeprova2 = nota2
    this.notadetrabalho = notadetrabalho
  }

  calcularMedia() {
    let mediaProvas = (this.notadeprova1 + this.notadeprova2) / 2
    let mediaFinal = (mediaProvas * 2.5 + this.notadetrabalho * 2) / 4.5
    return mediaFinal
  }
  
  feedback() {
    const media = this.calcularMedia();
    const notaNecessariaAprovacao = 7;
    const notaNecessariaFinal = 4;
    const diferencaNotaAprovacao = notaNecessariaAprovacao - media;
    const diferencaNotaFinal = notaNecessariaFinal - media;
    
    if (media >= 7) {
      return `Você está aprovado! A sua nota é de ${media.toFixed(2)} pontos.`
    } else if (media > 4) {
      return `Você está na final! A sua nota é de ${media.toFixed(2)} pontos. Você precisava de ${diferencaNotaAprovacao.toFixed(2)} pontos para ser aprovado.`
    } else {
      return `Você está reprovado! A sua nota é de ${media.toFixed(2)} pontos. Você precisava de ${diferencaNotaFinal.toFixed(2)} pontos para fazer a final.`
    }
  }
}

aluno = new alunosMatriculados("Pedro", 25308, 8, 7, 6)
console.log(aluno.feedback())
```
  
***

#### 2. Crie uma classe usuário que deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe.

``` js
let usuario = class {
  constructor(email, senha) {
    this.email = email
    this.senha = senha
  }
}

newUser = new usuario("abcde@gmail.com","123456")

console.log(newUser)
```

***

#### 3. Crie uma classe chamada Pessoa que deve receber três parâmetros no método construtor, nome, idade e sexo. Crie um método chamado apresentar e mostre o nome, idade e sexo da pessoa.

```js
let pessoa = class {
  constructor (nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  get apresentar() {
    let apresentacao = `Nome: ${this.nome} // Idade: ${this.idade} // Sexo: ${this.sexo}`
    return apresentacao
  }
}

novaPessoa = new pessoa("Pekim", 25, "M")

console.log(novaPessoa.apresentar)
```

***

#### 4. Crie uma classe chamada calculadora. Receba dois números como parâmetros no construtor. Crie quatro métodos para calcular as quatro operações matemáticas: Adição, subtração, divisão e multiplicação. Quando criado o objeto é mandado para o construtor 2 números e quando chamarmos os métodos mostra o resultado.


```js
let escolherNum1, escolherNum2;

calculadora = class {
  constructor (num1, num2) {
    this.num1 = num1
    this.num2 = num2
  }
  
  get opAdicao() {
    return this.calcAdicao()
  }
  
  calcAdicao() {
    let calc = this.num1 + this.num2
    return calc
  }
  
  get opSubtracao () {
    let calc = this.num1 - this.num2
    return calc
  }
  
  get opMultiplicacao () {
    let calc = this.num1 * this.num2
    return calc
  }
  
  get opDivisao () {
    let calc = this.num1 / this.num2
    return calc
  }
}

escolherNum1 = Number(prompt("Primeiro valor: "))
escolherNum2 = Number(prompt("Segundo valor: "))

const sessao = new calculadora(escolherNum1, escolherNum2)

escolherOp = prompt("Escolha a operação desejada: ")

if (escolherOp === "adicao") {
  resultado = sessao.opAdicao
} else if (escolherOp === "subtracao") {
  resultado = sessao.opSubtracao
} else if (escolherOp === "multiplicacao") {
  resultado = sessao.opMultiplicacao
} else if (escolherOp === "divisao") {
  resultado = sessao.opDivisao
}

console.log(resultado)
```
