function calculadorDeResultados(resultados) {
    let [vitorias, derrotas] = [0, 0]
    for (const resultado of resultados) {
        vitorias += resultado === "vitória" ? 1 : 0
        derrotas += resultado === "derrota" ? 1 : 0
    }
    return [vitorias, derrotas]
}

module.exports = calculadorDeResultados