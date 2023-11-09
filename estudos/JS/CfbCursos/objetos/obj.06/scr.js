class Carro{//classe pai
    constructor(nome=0,portas=0){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = ''
    }
    ligar = function(){//se this.ligado for true ent ele liga
        this.ligado = true
    }
    desligar = function(){//se this.ligado for false ele desliga
        this.ligado = false
    }
    setCor = function(cor){//para adicionar uma cor ao carro
        this.cor = cor
    }
}

class Militar extends Carro{//classe filho
    constructor(nome,portas,blindagem,munição){
        super(nome,portas)//preciso passar o que ja tem definido na classe pai e dps posso passar os que é diferente
        this.blind = blindagem
        this.muni = munição
        this.setCor('Verde')//todos os carros vão ser verdes//meio q está chamando a função e dando o valor do parâmetro
    }
    atirar = function(){
        if(this.muni > 0 ){//dá para usar o if normal aq na function
            this.muni --//tira uma bala
        }
    }
}

const c2 = new Militar('lutador',6,100,8)
c2.atirar()//perde uma bala cada vez q é chamada a função
console.log(`Nome:${c2.nome}`)
console.log(`Número de portas:${c2.portas}`)
console.log(`Blindagem:${c2.blind}`)
console.log(`Número de balas:${c2.muni}`)
console.log(`Ligado:${(c2.ligado) ? 'Sim' : 'Não'}`)//ternário para facilitar
console.log(`Vel:${c2.vel}`)
console.log(`Cor:${c2.cor}`)
console.log('-----------------------')
const c1 = new Carro('corsa',4)
c1.ligar()//as funções foram criadas para usar quando eu queiser ligar e desligar
c1.setCor('rosa')
// c1.desligar()
console.log(`Nome:${c1.nome}`)
console.log(`Número de portas:${c1.portas}`)
console.log(`Ligado:${(c1.ligado) ? 'Sim' : 'Não'}`)//ternário para facilitar
console.log(`Vel:${c1.vel}`)
console.log(`Cor:${c1.cor}`)
// console.log(c1)