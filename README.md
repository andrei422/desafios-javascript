![Desafio técnico | Javascript Software Developer](https://user-images.githubusercontent.com/61591316/75612456-78f83b00-5b1b-11ea-9bf8-211c6f6f6bf1.png)

Conheça mais sobre a **[idwall](https://idwall.co/sobre-nos/)**

## Como funciona o desafio

Para nossa primeira etapa de avaliação técnica, propomos um teste composto de 6 pequenos desafios, onde queremos avaliar conhecimentos sobre lógica de programação e Javascript básico. Os códigos podem ser encontrados no diretório **[challenges](https://github.com/idwall/desafios-javascript/tree/master/challenges)** e devem ser resolvidos de acordo com seus respectivos enunciados.

Para auxiliar você na resolução dos problemas, deixamos a suíte de testes automatizados já funcionando. Caso opte por rodar os testes, siga o seguinte fluxo:

```sh
# Instala as dependências do projeto
npm install

# Para rodar os testes para todos os desafios
npm run test:all

# Para rodar o teste para um desafio específico
npm run test:challenge:1
```

## Como entregar o desafio

O desafio deve ser entregue no prazo máximo de **4 dias**, considerando que o prazo começa um dia depois do momento em que lhe enviamos as instruções. Desenvolva o teste em um repositório github e envie o link para o e-mail **chapter.javascript@idwall.co** com o assunto `Desafio Técnico - [NOME DA CANDIDATA(O)]`. Seria ótimo se também fosse enviada uma breve descrição explicando como você resolveu os desafios.

Caso tenha qualquer problema e não puder iniciar o desafio no prazo estabelecido, ou tiver dúvidas e dificuldades durante o processo, ou mesmo precisar de um feedback sobre sua avaliação, nos envie um e-mail e estaremos prontos para ajudar :)

Bom teste!

## Soluções dos desafios

### Desafio 1

Utilizei a função `reduce` para somar os argumentos da função.

### Desafio 2

Utilizei a função `reduce`, e cada interação do `reduce` foi somado ao acumulado, caso o número fosse primo.

### Desafio 3

Foi implementado uma função que realiza a decomposição de um número (com os dividores primos). Para resolver o problema, foi realizado a decomposição dos número a e b e depois analisado os divisores comuns. Com os divisores em comum, bastou multiplicar-los com a função `reduce`.

### Desafio 4

Foram mapeado os dados recebido em um `Map` e formatado a saída de acordo com o enunciado.

### Desafio 5

Foi atribuído o estado atual do erro como `false` e do loading como `true`. Realizado a requisição a api de forma assíncrona, e dependendo do resultado foi atríbuido o valor do dado recebido ou sinalizado a ocorrência de um erro. Ao final, foi atribuido loading como `false` para sinalizar que a informação chegou do servidor.

### Desafio 6

Foi realizado a busca do `width` e `height` utilizando regex. Caso não encontra-se, o valor padrão é `0`
