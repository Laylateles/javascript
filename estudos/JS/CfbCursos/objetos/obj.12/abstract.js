class CarroPadrao{//não quero criar obj,somente uma base
    constructor(){
        if(this.constructor === CarroPadrao){
            throw new TypeError('Esta classe não pode ser instanciada')
        } //basicamente ele dispara um erro se tentarmos instanciar essa class
        if(this.ligar === undefined){//throw é uma excessão
            throw new TypeError('É obrigatório implementar o método ligar')
        }
        if(this.desligar === undefined){
            throw new TypeError('É obrigatório implementar o método desligar')
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = true
    }
}

class Carro extends CarroPadrao{
    constructor(tipo,estTurbo){
        super()//tenho q colocar antes!!
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
        this.velMax+=this.turbo.pot
    }
    info(){
        console.log(`Nome:${this.nome}`)
        console.log(`Velocidade Máxima:${this.velMax}`)
        console.log(`Turbo:${this.turbo.pot}`)
        console.log(`Número de Rodas:${this.rodas}`)
        console.log(`Número de portas:${this.portas}`)
        console.log(`Ligado:${(this.ligado) ? 'Sim' : 'Não'}`)
        console.log(`-----------------------`)
    }
    ligar(){//mesmo que ele não faça nada o erro ja some,ele tem que ser colocado na class que herda o CarroPadrao
        this.ligado = true
    }
    desligar(){
        this.ligado = false
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
        super(4,estTurbo)
        this.nome = 'Carro especial'
    }
    info(){
        super.info()
    }
}

const n1 = new Carro(2,4)
const n2 = new Carro(3,0)
const n3 = new CarroEspecial(2)
//const n4 = new CarroPadrao()
n1.desligar()
n1.info()
n2.info()
n3.info()
//n4.info()
