class Carro{
    constructor(tipo,estTurbo){
        this.turbo = new Turbo(estTurbo)
        switch(tipo){
            case 0:
                this.velMax = 100
                this.nome = 'lento'
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
        this.velMax+=this.turbo.pot//o pot é a potencia do turbo que está definido no class Turbo
    }
    info(){
        console.log(`Nome:${this.nome}\nVelocidade Máxima:${this.velMax}\nTurbo:${this.turbo.pot}\n-----------------------`)
    }
}


class Turbo{
    constructor(e){
        switch(e){
            case 0:
                this.pot = 40
                break
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

class CarroEspecial extends Carro{
    constructor(estTurbo){
        super(4,estTurbo)//vai ser o tipo 4 e o estagio do turbo
        //this.velMax = 300 + this.turbo.pot se casso fosse preciso criar um tipo especial que não tenha sido criado
        this.nome = 'Carro especial'
    }
    info(){//ele sobrescreveu o info do outro obj
        super.info()//ele chama a info do pai
    }
}

const n1 = new Carro(2,4)
const n2 = new Carro(3,0)
const n3 = new CarroEspecial(2)//só passamos o estTurbo
n1.info()
n2.info()
n3.info()
