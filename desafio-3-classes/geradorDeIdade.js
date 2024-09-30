function geradorDeIdade(classe) {
    let idadeMinima
    switch (classe) {
        case "ninja":
            idadeMinima = 20
            break
        case "guerreiro":
            idadeMinima = 30
            break
        case "monge":
            idadeMinima = 40
            break
        case "mago":
            idadeMinima = 70
    }
    return idadeMinima + Math.floor(Math.random() * 40)
}

module.exports = geradorDeIdade