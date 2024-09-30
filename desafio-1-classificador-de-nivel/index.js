const nome = "Joaozinho"
let xpAtual = 10
const listaDeXP = [1, 5, 8, 100, 1000, 2000, 1000, 500, 3000]

for (const valor of listaDeXP) {
    xpAtual += valor
}

let nivel
if (xpAtual <= 1000) {
    nivel = "Ferro"
} else if (xpAtual <= 2000) {
    nivel = "Bronze"
} else if (xpAtual <= 5000) {
    nivel = "Prata"
} else if (xpAtual <= 7000) {
    nivel = "Ouro"
} else if (xpAtual <= 8000) {
    nivel = "Platina"
} else if (xpAtual <= 9000) {
    nivel = "Ascendente"
} else if (xpAtual <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)