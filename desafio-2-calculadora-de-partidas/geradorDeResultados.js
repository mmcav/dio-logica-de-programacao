function geradorDeResultados(quantidade) {
    const resultados = []
    const valorAleatorioInicial = Math.random()
    for (let i = 0; i < quantidade; i++) {
        const resultado = Math.random() < valorAleatorioInicial ? "vitória" : "derrota"
        resultados.push(resultado)
    }
    return resultados
}

module.exports = geradorDeResultados