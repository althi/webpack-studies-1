//Javascript suporta class. Um jeito diferente de escrever function
export default class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    toString() {
        return `Pessoa: ${this.nome}`
    }
}