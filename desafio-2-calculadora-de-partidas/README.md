# 2️⃣ Calculadora de partidas Rankeadas

<details>
    <summary>Requisitos do Desafio</summary>

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

- Se vitórias for menor do que 10 = Ferro
- Se vitórias for entre 11 e 20 = Bronze
- Se vitórias for entre 21 e 50 = Prata
- Se vitórias for entre 51 e 80 = Ouro
- Se vitórias for entre 81 e 90 = Diamante
- Se vitórias for entre 91 e 100= Lendário
- Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:

"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
</details>

## Solução Proposta

Separei as funcionalidades do calculador de saldo de vitórias e do classificador de vitórias em duas funções separadas, para que cada uma tenha uma responsabilidade específica. Adicionalmente, coloquei as funções em arquivos próprios, pensando na facilidade de reutilização em melhorias futuras.

Similar ao desafio 1, existe o requisito de laços de repetição, mas nenhuma necessidade explícita para tal. Portanto, para fins deste desafio, eu criei uma necessidade na forma de duas funções adicionais: a primeira gera um array de resultados aleatórios, e a segunda calcula o número de vitórias e derrotas baseado no array gerado aleatoriamente.