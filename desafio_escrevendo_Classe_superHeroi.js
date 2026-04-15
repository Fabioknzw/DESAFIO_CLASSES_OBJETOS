class ClasseHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

}

let classeGuerreiro = new ClasseHeroi("fabio", "35", "Guerreiro")
console.log(classeGuerreiro.tipo)