# Instruções do projeto

``` yaml
Desenvolva um código, utilizando o Google Blockly, que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:

A: Veículos com duas ou três rodas;

B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;

C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;

D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;

E: Veículos com quatro rodas ou mais e com mais de 6000 kg.
```

- ## Resposta:

``` js
let quantidadeRodas = Number(prompt("Quantidade de rodas:"));
let pesoBruto = Number(prompt("Peso Bruto"));
let quantidadePessoasVeiculo = Number(prompt("Quantidade de pessoas"));

if (quantidadeRodas === 2 || quantidadeRodas === 3) {
  console.log("Categoria A");
} else if (quantidadeRodas === 4 && quantidadePessoasVeiculo <= 8 && pesoBruto <= 3500) {
  console.log("Categoria B");
} else if (quantidadeRodas >= 4 && pesoBruto > 3500 && pesoBruto <= 6000 && quantidadePessoasVeiculo <= 8) {
  console.log("Categoria C");
} else if (quantidadeRodas >= 4 && quantidadePessoasVeiculo > 8) {
  console.log("Categoria D");
} else if (quantidadeRodas >= 4 && pesoBruto > 6000) {
  console.log("Categoria E");
} else {
  console.log("Categoria não determinada");
}
```