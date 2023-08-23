# Instruções do projeto

``` yaml
Elabore um algoritmo que representa um cadastro. Ele deve ler os seguintes dados fornecidos pelo usuário:

- Nome
- Endereço
- Cidade
- CPF
- RG
- Idade
- Nome do pai
- Nome da mãe
- Peso
- Renda bruta

Apresente as informações solicitadas no final do cadastro.
```

- ## Resposta

Construindo um algoritmo utilizando a linguagem de programação JavaScript que seja capaz de apresentar um mecanismo para o cadastramento de dados por parte do usuário e posterior exibição dos dados obtidos nele para a sua tela.

- -  -

Serão utilizadas variáveis do tipo string para armazenar informações de texto, como nome, endereço, cidade, nome do pai e mãe. E variáveis do tipo number serão empregadas para guardar tipos de dados numéricos, como CPF, RG, idade, peso e renda bruta. Todas essas variáveis serão DECLARADAS com a palavra-chave "let" com os seus respectivos nomes descritivos, correspondentes aos valores que serão armazenados.

Para inicializar e atribuir valores às variáveis, será feito o uso da função prompt().

Por fim, como saída de dados, a função console.log() será utilizada para que sejam apresentados os dados anteriormente armazenados pelos prompts para o usuário.


- ## Algoritmo

``` js
// Declaração de Variáveis:

let nome, endereco, cidade, cpf, rg, idade, nomePai, nomeMae, peso, rendaBruta;

// Entrada de dados: Inicialização e Atribuição de Valores

nome = prompt("Digite o seu nome completo: ")
endereco = prompt("Digite o seu endereço: " )
cidade = prompt("Digite a cidade ao qual reside atualmente: " )
cpf = Number(prompt("Digite o seu CPF: ")) 
rg = Number(prompt("Digite o seu RG: "))
idade = Number(prompt("Digite a sua idade: "))
nomePai = prompt("Digite o nome completo de seu pai: ")
nomeMãe = prompt("Digite o nome completo de sua mãe: ")
peso = Number(prompt("Digite o seu peso atual: "))
rendaBruta = Number(prompt("Digite a sua renda bruta: "))

// Saída dos Dados

console.log(`Eu sou o(a) ${nome} residente da cidade de ${cidade}, me encontro mais precisamente no endereço ${endereco}. Os documentos que possuo são o RG (${rg}) e CPF (${cpf}). Sou filho(a) de ${nomePai} e ${nomeMãe}. Atualmente, tenho ${idade} anos e meu peso é de ${peso}. Minha renda bruta mensal é de $${rendaBruta}.`)
```

<details> <summary>Tags</summary>

[[SEC 1 - Lógica Imperativa]]

</details>