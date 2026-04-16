class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    let ataque = ""

    // Decisão para definir o ataque
    if (this.tipo === "mago") {
      ataque = "magia"
    } else if (this.tipo === "guerreiro") {
      ataque = "espada"
    } else if (this.tipo === "monge") {
      ataque = "artes marciais"
    } else if (this.tipo === "ninja") {
      ataque = "shuriken"
    } else {
      ataque = "ataque desconhecido"
    }

    
      console.log(` O ${this.tipo} atacou usando ${ataque}`)
    
  }
}
let heroi = new Heroi("Naruto", 20, "ninja")

// Chamando o método
heroi.atacar()