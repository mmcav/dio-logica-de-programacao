const seletorDeClasse = require("./seletorDeClasse")
const geradorDeIdade = require("./geradorDeIdade")
const Heroi = require("./Heroi")

function geradorDeParty(nomes, classes) {
    const party = []
    for (const nome of nomes) {
        const classe = seletorDeClasse(classes)
        party.push(new Heroi(nome, geradorDeIdade(classe), classe))
    }
    return party
}

module.exports = geradorDeParty