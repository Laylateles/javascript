class Carro{
    constructor(tipo,estTurbo){
        this.turbo = new Turbo(estTurbo)
        switch(tipo){
            case 1:
                this.velMax = 120
                this.nome = 'normalrapido'
                break
            case 2:
                this.velMax = 150
                this.nome = 'rapidão'
                break
            case 3:
                this.velMax = 180
                this.nome = 'muitorapido'
                break
            case 4:
                this.velMax = 200
                this.nome = 'ultrarapido'
                break
            default:
                this.velMax = 210
                this.nome = 'megarapido'
                break

        }
        this.velMax+=this.turbo
    }
    info(){
        console.log(`Nome:${this.nome}\nVelocidade Máxima:${this.velMax}\nTurbo:${this.turbo}`)
    }
}

//termino amanhã

class Turbo{
    constructor(e){
        switch(e){
            case 1:
                this.pot = 50
                break
            case 2:
                this.pot = 60
                break
            case 3:
                this.pot = 70
                break
            case 4:
                this.pot = 80
                break
            case 5:
                this.pot = 90
                break
            case 6:
                this.pot = 100
                break
            default:
                this.pot = 0
                break
        }
    }
}

const n1 = new Carro(2,4)
n1.info()
