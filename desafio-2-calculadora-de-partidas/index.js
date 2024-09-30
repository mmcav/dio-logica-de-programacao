const partidas = 200
const geradorDeResultados = require("./geradorDeResultados")
const resultados = geradorDeResultados(partidas)

const calculadorDeResultados = require("./calculadorDeResultados")
const [vitorias, derrotas] = calculadorDeResultados(resultados)

const calculadorDeSaldoDeVitorias = require("./calculadorDeSaldoDeVitorias")
const saldoVitorias = calculadorDeSaldoDeVitorias(vitorias, derrotas)

const classificadorDeVitorias = require("./classificadorDeVitorias")
const nivel = classificadorDeVitorias(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)