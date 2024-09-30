# 3️⃣ Escrevendo as classes de um Jogo

<details>
    <summary>Requisitos do Desafio</summary>

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)

se guerreiro -> no ataque exibir (usou espada)

se monge -> no ataque exibir (usou artes marciais)

se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"

ex: mago atacou usando magia

guerreiro atacou usando espada
</details>

## Solução Proposta

Criei uma classe Heroi com as funcionalidades especificadas.

Similar aos desafios anteriores, existem os requisitos de laços de repetição, operadores matemáticos e estruturas de decisões, mas nenhuma necessidade explícita para tais. Portanto, para fins deste desafio, eu criei as necessidades para utilizá-las: uma função que cria uma party de heróis para os nomes em uma lista pré-definida, uma função que seleciona uma classe de herói aleatoriamente, e uma função que gera uma idade para o herói com base na sua classe.