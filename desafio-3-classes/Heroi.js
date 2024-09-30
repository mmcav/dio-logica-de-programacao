class Heroi {
    static ataque = {
        "mago": "magia",
        "guerreiro": "espada",
        "monge": "artes marciais",
        "ninja": "shuriken"
    }

    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar() {
        console.log(`o ${this.tipo} atacou usando ${Heroi.ataque[this.tipo]}`)
    }
}

module.exports = Heroi