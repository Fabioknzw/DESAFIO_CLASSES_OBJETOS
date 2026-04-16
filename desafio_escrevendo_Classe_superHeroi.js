class heroi{
    constructor(nome,idade,tipo){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }

    atacar(){
        
            
        let ataque= ""
        if (this.tipo === "guerreiro"){
            ataque = "espada"
        }

        else if (this.tipo === "mago"){
            ataque = "magia"
        }

        else if (this.tipo === "monge"){
            ataque = "Artes marciais"
        }

        else if (this.tipo === "Ninja"){
            ataque= "shuriken"
        }
        console.log(` o ${this.tipo} atacou usando ${ataque} `)
        
    }


}

let superHeroi = new heroi("fabio", 35, "mago")
superHeroi.atacar()


//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)