const geradorDeParty = require("./geradorDeParty")

const classes = ["ninja", "guerreiro", "monge", "mago"]
const nomes = ["Joaozinho", "Mariazinha", "Pedrinho", "Aninha"]
const party = geradorDeParty(nomes, classes)

for (const heroi of party) {
    heroi.atacar()
}